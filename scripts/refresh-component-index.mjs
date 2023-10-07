import fs from 'fs';


const buildNewExports = (sourceComponentsDir) => {
  let newExports = []
  fs.readdirSync(sourceComponentsDir).forEach(componentName => {
    const componentDir = `${sourceComponentsDir}/${componentName}`

    if (componentDir.match(/\/[^\/.]+$/)) {      
      newExports.push(`export { ${componentName} } from './${componentName}'`)
    }
    newExports = newExports.sort()
  })
  return newExports
}

const writeNewIndexFile = (sourceComponentsDir, newExports) => {
  fs.writeFile(`${sourceComponentsDir}/index.ts`, newExports.join('\n'), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  })
}

const main = () => {
  const sourceComponentsDir = './src/components'
  const newExports = buildNewExports(sourceComponentsDir)
  writeNewIndexFile(sourceComponentsDir, newExports)
}
main()