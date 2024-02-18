//배열함수

let names = ["Steven Paul Jobs",
"Bill Gates",
"Mark Elliot Zuckerberg",
"Elon Musk",
"Jeff Bezos",
"Warren Edward Buffett",
"Larry Page",
"Larry Ellison",
"Lloyd Blankfein"
]

// map 문제
// * 모든 이름을 대문자로 바꾸어서 출력하시오.
// * 성을 제외한 이름만 출력하시오.(예 ["Steven", "Bill", "Mark"...])
// * 이름의 이니셜만 출력하시오. (예 ["SPJ", "BG", "MEZ"...])

let upperName = names.map((item)=>item.toUpperCase())
console.log(upperName);

let firstName = names.map((item)=>item.split(' ')[0])
console.log(firstName);

let initialName = names.map((item)=>{
    let splitItem = item.split(' ')
    let iniName = ''
    splitItem.forEach((nameItem) => {iniName += nameItem[0]});
    return iniName;
})
console.log(initialName)

// filter 문제
// * 이름에 a를 포함한 사람들을 출력하시오.
// * 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오.

let includeA = names.filter((item)=>item.includes('a'))
console.log(includeA);

let doubleChar = names.filter((item)=>{
    let splitItem = item.split("")
    return splitItem.some((letter, index) => letter == splitItem[index+1])
    })
console.log(doubleChar);

// some 문제
// * 전체 이름의 길이가 20자 이상인 사람이 있는가?
// * 성을 제외한 이름에 p를 포함한 사람이 있는가? (대소문자 상관no)

let someName = names.some((item)=>item.length >= 20)
console.log(someName);

let someNameP = names.some((item)=>{
    let splitItem = item.split(" ")
    splitItem.pop()
    return splitItem.some((eachName)=>eachName.toLocaleLowerCase().includes("p"))
})
console.log(someNameP)

// every 문제
// * 모두의 전체 이름의 길이가 20자 이상인가?
// * 모두의 이름에 a가 포함되어 있는가?

let everyName = names.every((item)=>item.length >= 20)
console.log(everyName)

let everyNameA = names.every((item)=>item.includes('a'))
console.log(everyNameA)

// find 문제
// * 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
// * 미들네임이 포함되어 있는 사람을 찾으시오.

let findName = names.find((item)=>item.length >= 20)
console.log(findName)

let findMiddleName = names.find((item)=>item.split(" ").length > 2)
console.log(findMiddleName)

// findIndex 문제
// * 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
// * 미들네임이 포함되어 있는 사람의 인덱스 번호를 찾으시오. 

let findIndexName = names.findIndex((item)=>item.length >= 20)
console.log(findIndexName)

let findMiddleIndex = names.findIndex((item)=>item.split(" ").length > 2)
console.log(findMiddleIndex)
