<template>
  <div id="main">
    <div class="todo-lists">
      <v-row>
        <v-col class="mt-3" cols="12">
          <v-card class="mx-auto" color="#26c6da" dark max-width="1000">
            <list-box></list-box>
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar colo="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>민태영</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col class="mt-3" cols="12">
          <v-card class="mx-auto" color="#26c6da" dark max-width="1000">
            <list-box></list-box>
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar colo="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>민태영</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col class="mt-3" cols="12">
          <v-card class="mx-auto" color="#26c6da" dark max-width="1000">
            <list-box></list-box>
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar colo="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>민태영</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import ListBox from "@/components/common/ListBox.vue";
export default {
  components: {
    ListBox,
  },
  computed: {
    getLists() {
      return this.$store.state.loadTodos;
    },
  },
};
</script>

<style scoped>
#main {
  background-color: antiquewhite;
  width: 1250px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
}
.todo-lists {
  margin-top: 20px;
  background-color: white;
  height: 100vh;
  width: 90%;
  margin: 0 auto 0 auto;
}
</style>
