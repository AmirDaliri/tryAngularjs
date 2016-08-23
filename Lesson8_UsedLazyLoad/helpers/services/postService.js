angular.module('myApp').factory('postService',function(){
  return{
    getPosts:function(){
      return[
        {id:'1',title:'A.D',body:'',author:'Amir Daliri'},
        {id:'2',title:'A.S',body:'',author:'Ashkan Hesaraki'}
      ];
    }

  };
});
