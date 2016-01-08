angular.module('directoryApp', [])
	.controller('directoryController', function() {
		// body...
		var dirList = this;
		dirList.list = [
			{name:'Scot', age: 29}, {name:'Ross', age: 31}, 
			{name:'Ben', age: 32}, 
			{name:'Courtney', age: 29}
			];
		dirList.addPerson = function() {
			// body...
			dirList.list.push({name: dirList.name, age: dirList.age});
			dirList.name = '';
			dirList.age = 0;
		};
	});