#!/usr/bin/env bash
# ============================================================
#  Publica o actualiza el sitio del curso en GitHub Pages
#  Repo: josegzzv/ArquitecturaEmpresarial2026 (cuenta personal)
#  Usa el alias SSH "github.com-personal" de ~/.ssh/config
#
#  Uso:  bash publicar.sh ["mensaje del commit"]
#
#  El script detecta si ya existe un repositorio Git configurado:
#    · Si YA existe  -> solo hace add + commit + push (conserva el historial).
#    · Si NO existe  -> lo inicializa con tu identidad y hace el primer push.
# ============================================================

set -euo pipefail

ALIAS_SSH="github.com-personal"
REPO="josegzzv/ArquitecturaEmpresarial2026"
REMOTO="git@$ALIAS_SSH:$REPO.git"
NOMBRE="${GIT_AUTHOR_NAME:-Antonio González}"
CORREO="${GIT_AUTHOR_EMAIL:-josegzzv@gmail.com}"
MENSAJE="${1:-Actualiza el material del curso}"

# --- Sello de versión: evita que el navegador sirva JS o CSS viejos ---
sellar() {
  local sello
  sello=$(date +%Y%m%d%H%M)
  python3 - "$sello" <<'PYEOF'
import re, sys, pathlib
sello = sys.argv[1]
patron = re.compile(r'((?:href|src)="(?:assets/(?:css|js)|data)/[^"?]+)(\?v=\d+)?"')
for nombre in ("index.html", "semana.html", "glosario.html", "aviso-legal.html"):
    f = pathlib.Path(nombre)
    if not f.exists():
        continue
    f.write_text(patron.sub(rf'\1?v={sello}"', f.read_text()))
PYEOF
  echo "    Sello de versión aplicado: $sello"
}

echo "──> Verificando la identidad SSH del alias $ALIAS_SSH"
ssh -T "git@$ALIAS_SSH" 2>&1 | head -2 || true   # GitHub siempre sale con código 1
echo

if [ -d .git ] && git remote get-url origin >/dev/null 2>&1; then
  # ---------- Repositorio ya configurado: actualización ----------
  echo "──> Repositorio existente detectado. Actualizando."
  echo "    remote: $(git remote get-url origin)"

  sellar

  if [ -z "$(git status --porcelain)" ]; then
    echo "    No hay cambios que registrar."
  else
    git add -A
    git commit -m "$MENSAJE"
    echo "    Commit creado: $MENSAJE"
  fi

  git push
  echo
  echo "──> Listo. GitHub Pages redespliega solo en menos de un minuto:"
  echo "    https://josegzzv.github.io/ArquitecturaEmpresarial2026/"

else
  # ---------- Primera publicación ----------
  echo "──> Sin repositorio configurado. Inicializando."
  echo "    Requisito: el repo debe existir en GitHub y estar VACÍO."
  echo "    Identidad: $NOMBRE <$CORREO>"
  echo

  sellar

  git init -q
  git config user.name  "$NOMBRE"
  git config user.email "$CORREO"
  git add -A
  git commit -q -m "$MENSAJE"
  git branch -M main
  git remote add origin "$REMOTO"
  git push -u origin main

  echo
  echo "──> Falta activar Pages una sola vez:"
  echo "    https://github.com/$REPO/settings/pages"
  echo "    Source: Deploy from a branch -> main / (root)"
  echo
  echo "    Con gh CLI:"
  echo "    gh api -X POST repos/$REPO/pages -f 'source[branch]=main' -f 'source[path]=/'"
  echo
  echo "    El sitio queda en https://josegzzv.github.io/ArquitecturaEmpresarial2026/"
fi
