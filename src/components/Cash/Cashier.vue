<template>
    <div>
      <input type="number" v-model="entry" />
      <button type="button" @click="getCash">Get cash</button> 
      <p>{{result}}</p>
    </div>
</template>

<script>
export default {
  name: "Cashier",
  data: function() {
    return {
      entry: 0,
      result: [],
      papers: [100, 50, 20, 10]
    };
  },
  created() {
    this.sortPapers();
    this.getEntryFromURL();
  },
  methods: {
    sortPapers() {
      this.papers.sort((a, b) => {
        return b - a;
      });
    },
    getEntryFromURL() {
      if (this.$route && this.$route.params.entry) {
        this.entry = this.$route.params.entry;
        this.getCash();
      }
    },
    isMoney() {
      if (this.entry === "" || this.entry > 0) {
        return true;
      }
      return false;
    },
    isAvailable() {
      return this.papers.some(paper => this.entry % paper == 0);
    },
    getCash() {
      this.result = [];

      var entry = this.entry;

      if (!this.isMoney()) {
        throw "throw InvalidArgumentException";
      }
      if (!this.isAvailable()) {
        throw "throw NoteUnavailableException";
      }

      this.papers.forEach(paper => {
        var count_paper = Math.floor(entry / paper);
        if (count_paper >= 1) {
          for (var i = 0; i < count_paper; i++) {
            this.result.push(paper);
          }
          entry = entry - count_paper * paper;
        }
      });
    }
  }
};
</script>

<style>
</style>
