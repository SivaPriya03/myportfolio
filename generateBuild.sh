cd ./client
rm -r ./dist 
rm -r ./node_modules 
rm ./package-lock.json
npm cache clean -f
npm i
npm run build

cd ../
rm -r ./node_modules 
rm package-lock.json
npm cache clean -f
npm i
node server.js