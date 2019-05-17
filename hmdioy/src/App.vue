<template>
  <div id="app">
    <div class="add-conta" id="add-conta">
      <h1><p>Adicionar</p></h1>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Nome" aria-label="Username" aria-describedby="basic-addon1" v-model="name">
        <input type="text" class="form-control" placeholder="R$" aria-label="Price" aria-describedby="basic-addon1" v-model="price">
      </div>  
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Descrição" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="desc"> 
      </div>
      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-success btn-lg" v-on:click="noneElemento">Adicionar</button>
      </div>
      
    </div>
    <div class="container-fluid mt-1 bg-dark p-3">
      <div class="row d-flex justify-content-end">
        <div class="col-2">
           <button type="button" class="btn btn-primary btn-lg btn-block" v-on:click="blockElemento">+</button>
        </div>
      </div>
    </div>

    <div class="container">
      <h1  class="mt-3 d-flex justify-content-center">Suas Contas</h1>
      <table class="mt-5 table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Descricao</th>
            <th>Data</th>
            <th>Status</th>
          </tr>
        </thead>
          <tbody>
            <tr v-for="teste in testes" :key="teste.id">
              <th>{{ teste.id}}</th>
              <th>{{ teste.name}}</th>
              <th>{{ teste.price}}</th>
              <th> {{ teste.desc}}</th>
              <th>{{ teste.data}}</th>
              <th><button type="button" class="btn btn-outline-info" >Info</button></th>
            </tr>
            </tbody>
            <tfoot>
              <tr>
                <th> Total</th> 
              </tr>
            </tfoot>

      </table>
  </div>
  </div>
</template>

<script>
export default {
    data() {
    
     return {
       couter: 0,
       name: "",
       price: null,
       desc: "",
       testes:[]
     }
    },
  
    methods:{
      blockElemento(){
  
        document.getElementById('add-conta').style.display = 'block'


      },
      noneElemento(){
        this.incrment()
        
        this.testes.push({
          'id': this.couter,
          'name': this.name,
          'price': this.price,
          'desc': this.desc,
          'data': new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear()
        })
         document.getElementById('add-conta').style.display = 'none'
         
      },
      incrment(){
        this.counter++;
      }
    },
    mounted(){
    
    }
   
    
}
</script>

<style>
.add-conta{
  display: none;
  margin-top: 200px;
  margin-left: 25%;
  position: absolute;
  height: 50%;
  width: 40%;
  color: #fff;
  background-color: rgba(90, 88, 88, 0.7);
  border-radius: 5px;
  
  
}
.add-conta p{
  margin-top: 25px;
  color: white;
  display: flex;
  padding: 2px;
  justify-content: center;

}
.form-control{
  margin: 10px;
}

.btn .btn-primary .btn-lg{
  background-color: #fff;
}
</style>
