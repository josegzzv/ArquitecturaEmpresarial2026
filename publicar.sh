#!/usr/bin/env bash
# ============================================================
#  Publica el sitio del curso en GitHub Pages
#  Repo destino: josegzzv/ArquitecturaEmpresarial2026 (cuenta personal)
#  Usa el alias SSH "github.com-personal" definido en ~/.ssh/config
#
#  Uso:  cd ea-curso && bash publicar.sh
#  Requisito previo: el repositorio debe existir ya en GitHub, VACÍO
#  (sin README, sin .gitignore, sin licencia). Créalo en github.com/new
#  o con:  gh repo create josegzzv/ArquitecturaEmpresarial2026 --public
# ============================================================

set -euo pipefail

ALIAS_SSH="github.com-personal"
REPO="josegzzv/ArquitecturaEmpresarial2026"
NOMBRE="${GIT_AUTHOR_NAME:-Antonio González}"
CORREO="${GIT_AUTHOR_EMAIL:-josegzzv@gmail.com}"

echo "──> 1. Verificando la identidad SSH del alias $ALIAS_SSH"
# GitHub siempre responde con código 1 a ssh -T; lo que importa es el saludo.
ssh -T "git@$ALIAS_SSH" 2>&1 | head -2 || true
echo

echo "──> 2. Historial limpio con tu identidad ($NOMBRE <$CORREO>)"
rm -rf .git
git init -q
git config user.name  "$NOMBRE"
git config user.email "$CORREO"
git add -A
git commit -q -m "Sitio del curso: semanas 1 y 2 completas, plantillas 3-5"
git branch -M main

echo "──> 3. Remote y push"
git remote add origin "git@$ALIAS_SSH:$REPO.git"
git push -u origin main

echo
echo "──> 4. Falta un paso manual (o usa gh, abajo):"
echo "     Settings → Pages → Source: Deploy from a branch → main / (root)"
echo
echo "     Con gh CLI:"
echo "     gh api -X POST repos/$REPO/pages -f 'source[branch]=main' -f 'source[path]=/'"
echo
echo "     En 1-2 minutos el sitio queda en:"
echo "     https://josegzzv.github.io/ArquitecturaEmpresarial2026/"
