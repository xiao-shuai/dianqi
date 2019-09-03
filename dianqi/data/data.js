import { observable, action } from "mobx";

class dianmbx {
    @observable  list;
    constructor (){
        this.list=[
           {
               name:'爱田 美沙',
               phone:'18856453426',
               money:'100',
               add:'日本の神戸'
           } 
        ]
    }

  add_list=(e)=>{
      this.list.push(e)
  }   

}

const Dian =new dianmbx()
// export {Dian}
const alldata ={
    Dian
}
export default alldata