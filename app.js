//Task1
var studentNames = []

//Task2
//same as task 1

//Task3
var stringsArray = ['String', 'String2', 'String3']

//Task4
var numbersArray = [1, 5, 3, 8]

//Task5
var booleanArray = [true, false]

//Task6
var mixedArray = [1, 'String2' , false, 5, 8, true, 'String']

//Task7
var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']

document.write('<h2>Qualifications:</h2> <br>')

for (var i = 0; i < qualifications.length; i++){
    document.write(qualifications[i], '<br>')
}

//Task8
document.write('<br> <h2>Task8:</h2> <br>')

studentNames = ['Michael', 'John', 'Tony']
var studentScores = [320, 230, 480]
var studentTotalMarks = 500

for (var i = 0; i < studentNames.length; i++){
    document.write('Score of ', studentNames[i] , ' is ', studentScores[i], '.', ' Percentage: ', studentScores[i]/studentTotalMarks*100, '% <br>')
}

//Task9
document.write('<br> <h2>Task9:</h2> <br>')

var colorNames = []

//a
var color1 = prompt('(a) What color do you want to add to the beginning?')
colorNames.unshift(color1)
document.write('(a) <b>Color added:</b> ', colorNames, '<br>')

//b
var color2 = prompt('(b) What color do you want to add to the end?')
colorNames.push(color2)
document.write('(b) <b>Color added:</b> ', colorNames, '<br>')

//c
var color3 = prompt('(c) What color do you want to add to the beginning?')
colorNames.unshift(color3)
var color4 = prompt('(c2) What color do you want to add to the beginning?')
colorNames.unshift(color4)
document.write('(c) <b>Two Colors added:</b> ', colorNames, '<br>')

//d
colorNames.shift()
document.write('(d) <b>First Color removed:</b> ', colorNames, '<br>')

//e
colorNames.pop()
document.write('(e) <b>Last Color removed:</b> ', colorNames, '<br>')

//f
var color5 = prompt('(f) At which index do you want to add a color?')
var color6 = prompt('(f2) & which color do you want to add?')
colorNames.splice(color5, 0, color6)

document.write('(f) <b>Colors added:</b> ', colorNames, '<br>')

//g
var color7 = prompt('(f) At which index do you want to delete a color?')
var color8 = prompt('(f) And how many colors you want to delete?')
colorNames.splice(color7, color8)

document.write('(g) <b>Colors removed:</b> ', colorNames, '<br>')


//Task10
document.write('<br> <h2>Task10:</h2> <br>')

var studentScores2 = [320, 230, 480, 120]
document.write('<b>Scores of Students:</b> ', studentScores2 , '<br>')

studentScores2.sort((a, b) => a - b);
document.write('<b>Ordered Scores of Students:</b> ', studentScores2, '<br>')

//Task11
document.write('<br> <h2>Task11:</h2> <br>')

var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar']
var selectedCities = cities.slice(2)

document.write('<b>Cities:</b> ', cities, '<br>')
document.write('<b>Selected Cities:</b> ', selectedCities, '<br>')

//Task12
document.write('<br> <h2>Task12:</h2> <br>')

var arr = ['This ', ' is ', ' my ', ' cat'];
var arrjoined = arr.join('')
document.write('Array: ', arr, '<br>')
document.write('String: ', arrjoined, '<br>')

//Task13
document.write('<br> <h2>Task13:</h2> <br>')

var devices = ['keyboard', 'mouse', 'printer', 'monitor']
document.write('Devices: ', devices, '<br>')

for (var i = 0; i < devices.length; i++){
    document.write('Out: <br>', devices[i], '<br>')
}

//Task14
document.write('<br> <h2>Task14:</h2> <br>')

var devices2 = ['keyboard', 'mouse', 'printer', 'monitor']
document.write('Devices: ', devices2, '<br>')

devices2.reverse()

for (var i = 0; i < devices.length; i++){
    document.write('Out: <br>', devices2[i], '<br>')
}

//Task15
document.write('<br> <h2>Task15:</h2> <br>')

var phone = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier']

document.write('<select>')
for (var i = 0; i < phone.length; i++){
    document.write('<option>', phone[i],)
}