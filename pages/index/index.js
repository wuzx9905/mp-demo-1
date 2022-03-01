Page({
  data: {
    message: ['猜大了','猜小了','猜对了！'],
    result: '',
    target: -1,
    x: 0,
    y: 0,
    index: 0,
    arrayX: [0,1,2,3,4,5,6,7,8,9],
    arrayY: [0,1,2,3,4,5,6,7,8,9],
    targetNumber: ''
  },
  x:function(){
    this.setData({n:this.data.n +1})
  },
  setX:function(e){
    this.setData({x: e.detail.value})
  },
  setY:function(e){
    this.setData({y: e.detail.value})
  },
  begin:function(){
    this.setData({target: Math.round(Math.random()*100)});
    this.setData({targetNumber: '?'});
    this.setData({result: ''});
    this.return();
  },
  return:function(){
    this.setData({x: 0});
    this.setData({y: 0});
  },
  guess:function(){
    const number = parseInt(this.data.x + this.data.y);
    let flag = false;
    if(this.data.target === -1){
      flag = true;
      wx.showModal({
        title: '提示',
        content: '请先点击开始游戏喔！',
      })
    }

    if(flag == false){
      if(number === this.data.target){
        this.setData({result: this.data.message[2]});
        this.setData({targetNumber: (this.data.x + this.data.y).toString()});
      }else if(number > this.data.target){
        this.setData({result: this.data.message[0]})
      }else{
        this.setData({result: this.data.message[1]})
      }
    }
  }
})
