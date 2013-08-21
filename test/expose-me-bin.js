var assert = require('assert')
  , path = require('path')
  , fs = require('fs')
  , exec = require('child_process').exec
  , project = 'test/project-test'
  , filename = 'expose-me.json';

var filepath = path.resolve(project,filename);

describe('expose-me',function () {
  describe('template file', function () {

    it('should be a valid json file', function () {
      addExposeMeFileTo(project);
      JSON.parse(fs.readFileSync(filepath));
    })
    
    it('should create file',function () {
      //clear
      removeExposeMeFileFrom(project);

      //generate expose.json from command line tool
      exec('./bin/expose-me --init -p '+project, checkFile);
      
      function checkFile(er, stdout, stderr) {
        assert(true,fs.existsSync(file));
      }
    })

  })
})


//remove expose-me.json file from project if exists

function removeExposeMeFileFrom(project) {
  file = path.resolve(project,filename);
  if(fs.existsSync(file))
    fs.unlinkSync(file);
}


//add expose-me.json file to project

function addExposeMeFileTo(project) {
  exec('./bin/expose-me --init -p ' + project);
}