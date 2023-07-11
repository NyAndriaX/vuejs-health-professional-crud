<template>
  <div class="content-table">
    <table>
      <thead>
          <tr>
            <th>Nom</th>
            <th>Nombre de jours</th>
            <th>Taux journalier</th>
            <th>Prestation</th>
            <th>Actions</th>
          </tr>

      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>
            <template v-if="item.editable">
              <input v-model="item.nom" />
            </template>
            <template v-else>
              <p>{{ item.nom }}</p>
            </template>
          </td>
          <td>
            <template v-if="item.editable">
              <input v-model="item.nbrDeJours" />
            </template>
            <template v-else>
              <p>{{ item.nbrDeJours }}</p>
            </template>
          </td>
          <td>
            <template v-if="item.editable">
              <input v-model="item.tauxJournalier" />
            </template>
            <template v-else>
              <p>{{ item.tauxJournalier }}</p>
            </template>
          </td>
          <td>
            <template v-if="item.editable">
              <p style="display: none;"> {{ i = item.tauxJournalier * item.nbrDeJours }}</p>
              <input v-model="i" disabled/>
            </template>
            <template v-else>
              {{  item.tauxJournalier * item.nbrDeJours }}
            </template>
          </td>
          <td>
            <template v-if="item.editable">
              <button class="btn btn-cancel"  @click="annulerModification(item)">cancel</button>
              <button class="btn btn-save" @click="sauvegarderItem(item)">save</button>
            </template>
            <template v-else>
              <div class="content-btn">
                  <button class="btn-edit-delete" style="color:#2c3e50;" @click="modifierItem(item)"><li class="bi bi-pencil-square"></li></button>
                  <button class="btn-edit-delete" style="color:#2c3e50;" @click="supprimerItem(item)"><li class="bi bi-trash2" ></li></button>                
              </div>

            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'TableauComponent',
  computed: {
    items() {
      return this.$store.getters.tableau;
    }
  },
    mounted() {
      this.$store.dispatch('getTableau');
    },

  methods: {
    modifierItem(item) {
      item.editable = true;
    },
    sauvegarderItem(item) {
      item.editable = false;
     this.$store.dispatch('updateTableau',item)
    },
    annulerModification(item) {
      item.editable = false;
    },
    supprimerItem(item) {
      this.$store.dispatch('deleteTableau',item)
    }
  }
};
</script>

<style>
  table{
    margin-top:12px;
    width:90vw;
    min-width: 600px;
    border-collapse: collapse;
  }
  td{
    width:200px;
    padding: 6px 0px;
  }
  .btn{
    border: none;
    padding: 6px 9px;
    border-radius: 6px;
    font-size: 15px;
    margin-left: 5px;
  }
  .btn-save{
    background-color: rgb(33, 235, 33);
    color:white;
  }
  .btn-cancel{
    background-color: white;
    color:black;
    border:1px solid #eaeaea;
  }
  tbody {
    background-color: white;
  }
  thead tr th{
    padding: 25px 10px;
    font-weight: 600;
    font-size: 14px;
  }
  input{
    padding: 4px 4px;
    border-radius: 6px;
    border-color: #eaeaea;
    border:1px solid #eaeaea;
    padding:8px 8px;
    text-align: center;
  }
  li{
    list-style-type: none;
    padding:5px 5px;
  }
  .btn-edit-delete{
    background-color: #ffff;
    border: 1px solid #eaeaea;
    border-radius: 6px;
    margin:0px 2px;
  }
  p{
    font-size: 13.5px;
  }
  tbody tr td{
    border-bottom:1px solid #eaeaea;
  }
  .content-btn{
    display: none;
  }
  tbody tr:hover .content-btn{
    display:flex !important;
    justify-content: center;
  }
  tbody tr:hover{
    background-color: #faf5f5;
  }

</style>
