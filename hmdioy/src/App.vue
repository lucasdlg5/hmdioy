<template>
  <div id="app">
    <div class="add-conta">
      <h1><p>Adicionar</p></h1>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Nome" aria-label="Username" aria-describedby="basic-addon1">
        <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
      </div>  
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="algum preco" aria-label="Recipient's username" aria-describedby="button-addon2">
      </div>
      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-success btn-lg">Adicionar</button>
      </div>
      
    </div>
    <div class="container-fluid mt-1 bg-dark p-3">
      <div class="row d-flex justify-content-end">
        <div class="col-2">
           <button type="button" class="btn btn-primary btn-lg btn-block">+</button>
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
            <th>Data</th>
            <th>Status</th>
          </tr>
        </thead>
          <tbody>
            <tr v-for="teste in testes" :key="teste.id">
              <th>{{ teste.id}}</th>
              <th>{{ teste.name}}</th>
              <th>{{ teste.price}}</th>
              <th>{{ teste.date}}</th>
              <th><button type="button" class="btn btn-outline-info">Info</button></th>
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
        testes:[{"id":1,"name":"Kevinho","price":269,"date":"01/05/2018 00:09"},
                {"id":2,"name":"Gusta","price":269,"date":"01/05/2018 00:09"},
                {"id":3,"name":"Lusca","price":269,"date":"01/05/2018 00:09"},
                {"id":4,"name":"Gutinho","price":269,"date":"01/05/2018 00:09"},
                {"id":5,"name":"jonta","price":269,"date":"01/05/2018 00:09"}]
     }
    },
  
    methods:{
      getDevedores(){
        fetch('teste.json').then(resp => resp.json()).then(data => this.json = data)
      },

      blockElemento(){
        document.getElementsByClassName('add-conta').style.display = 'block'

      }
    },
    mounted(){
      this.getDevedores()
    }
   
    
}
</script>

<style>
.add-conta{
  margin-top: 200px;
  margin-left: 25%;
  position: absolute;
  height: 50%;
  width: 40%;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  
  
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
