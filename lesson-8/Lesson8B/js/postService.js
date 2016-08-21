angular.module('myApp').factory('postService',function(){
  return{
    getPosts:function(){
      return[
        // {id:'1',title:'t1',body:'some text here for t1',author:'Elahe Bahari'},
        // {id:'2',title:'t2',body:'some text here for t2',author:'Idin Khayami'},
        {id:'01',title:'A.D',body:'',author:'Amir Daliri'},
        {id:'02',title:'E.B',body:'',author:'Elahe Bahari'},
        {id:'03',title:'D.v',body:'',author:'Danial vahdat'}
      ];
    }
  };
});
