/*
合并sourceObject的部分属性,到一个新的属性中,并返回合并的对象
@sourceObject Object
@keys Array
@mergedKeyName String
@return Object
@example
  mergeValus({name: 'h', age: 25}, ['name', 'age'], 'person') // {name: 'h', age: 25, person: {name: 'h', age: 25 }}
*/
function mergeValus(sourceObject, keys, mergedKeyName) {
	const len = keys.length
    sourceObject[mergedKeyName] = {}
    for (let i = 0; i < len; i++) {
         const curKey = keys[i]
		sourceObject[mergedKeyName][curKey] = sourceObject[curKey]
    }
    return sourceObject
}
