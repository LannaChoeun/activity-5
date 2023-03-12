(function() {
  var data = [
    {
      name:'atom-beautify',
      description:'The atom-beautify package cleans your code and makes it easier to read.',
      author:'Glavin001',
      url:'https://atom.io/packages/atom-beautify',
      downloads: 4000,
      stars: 4541,
      price: 6.75,
      selector: 'p1'
    },
    {
      name: 'Git-Plus',
      description: 'Git-Plus has command and shortcuts without going to the terminal.',
      author: 'GitHub Staff',
      url: 'https://atom.io/packages/git-plus',
      downloads: 50000,
      stars: 5412,
      price: 5.25,
      selector: 'p2'
    }
  ];


  function package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;


    this.getFormattedDownloads = function () {
      return this.downloads.toLocaleString();
    };


    this.getFormattedStars = function () {
      return this.stars.toLocaleString();
    };
   
  }


  var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
  };


  var getEl = function (id) {
    return document.getElementById(id);
  }


  var writePackageInfo = function(package) {
    var selector = package.selector,
    nameEl = getEl(selector + '-name'),
    descEl = getEl(selector + '-description'),
    authEl = getEl(selector + '-author'),
    downloadEl = getEl(selector + '-downloads'),
    starsEl = getEl(selector + '-stars');


    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();






  }
  dateEl = getEl('date');
  dateEl.textContent = getTodaysDate();


  var beautify = new package(data[0]);
  writePackageInfo(beautify);


  var git = new package(data[1]);
  writePackageInfo(git);












}());




