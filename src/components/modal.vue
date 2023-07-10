<template>
  <div>
    <button @click="openModal">Ouvrir Modal</button>
    <div v-if="modalVisible" class="modal">
      <div class="modal-content">
        <input type="text" v-model="nom" placeholder="Nom">
        <button @click="submit">Submit</button>
        <button @click="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ModalComponent',
  data() {
    return {
      modalVisible: false,
      nom: ''
    };
  },
  methods: {
    openModal() {
      this.modalVisible = true;
    },
    submit() {
      const name = this.nom;
      // Logique pour soumettre les données
      this.$store.dispatch('postTableau', name)
      this.modalVisible = false;
    },
    cancel() {
      // Logique pour annuler
      this.modalVisible = false;
    }
  }
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
}
</style>
