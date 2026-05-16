#!/bin/bash
set -e
cd /workspaces/Dataakitaa
shopt -s dotglob nullglob
mv fuzxcjgnc-main/* fuzxcjgnc-main/.[!.]* fuzxcjgnc-main/..?* .
rm -rf fuzxcjgnc-main
printf "Moved all files from fuzxcjgnc-main to workspace root and removed the folder.\n"