echo "Inicio del deploy"
yarn build
echo "Finalizo el build"
rm -r /var/www/html/index.html
rm -r /var/www/html/static
cp -r ./dist/index.html /var/www/html/
cp -r ./dist/static /var/www/html/
echo "fin del deploy"

