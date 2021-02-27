import * as path from 'path';
import * as fs from 'fs';
import * as glob from 'glob';

async function genAll() {
  const pathToModules = path.join(__dirname, '../modules');
  const graphqlTypes = glob
    .sync(`${pathToModules}/**/*.graphql`)
    .map((x) => fs.readFileSync(x, { encoding: 'utf8' }));

  const resolvers = glob
    .sync(`${pathToModules}/**/resolvers.?s`)
    .map((resolver) => require(resolver).resolvers);
}
