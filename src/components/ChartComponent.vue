<template>
  <Bar
    :chart-data="chartData"
    :width="950"
    :height="500"
    :chart-options="chartOptions"
  />
</template>

<script>
import { Bar } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
export default {
  components: {
    Bar,
  },
  props: {
    persent: {
      type: Number,
      required: true,
    },
  },
  mounted() {
    this.checkTodo();
  },
  data() {
    return {
      chartLabel: "",
      isPersent: 0,
      chartData: {
        datasets: [
          {
            label: this.chartLabel,
            data: [0, 100],
          },
        ],
      },
      chartOptions: {
        responsive: false,
        scales: {
          yAxes: [
            {
              display: false, // y축 기준 표시 여부
              ticks: {
                // y축 기준 데이터 변경
                // beginAtZero: true,
                min: 0, // y축 최소값
                max: 0, // y축 최대값
                stepSize: 50, // y축 간격
                fontSize: 20, // 글자크기
              },
              gridLines: {
                display: false, // 차트 안에 가로선 표시 여부
                drawBorder: false,
              },
            },
          ],
        },
      },
    };
  },
  methods: {
    changeLabel(persent) {
      let label = "";

      if (persent > 0 && persent < 30) {
        label = "천리길도 한걸음부터";
      } else if (persent >= 30 && persent < 50) {
        label = "벌써 반이나 해냈어요!";
      } else if (persent >= 50 && persent < 60) {
        label = "이제 반 밖에 안남았어요ㅎㅎㅎ";
      } else if (persent >= 60 && persent < 100) {
        label = "거의 다 와가요 힘내요!!";
      } else if (persent == 100) {
        label = "오늘도 100프로 달성!!!";
      } else {
        label = "오늘도 화이팅";
      }
      console.log("label = ", label);
      this.chartData.datasets[0].label = label;
      // return label;
    },
    async checkTodo() {
      let count = 0;
      let todos = 0;
      let todoList = this.$store.getters.GETTERS_MY_TODOS;
      await todoList.map((x) => {
        if (x.done == true) {
          count++;
        }
        todos++;
      });
      let persent = (count / todos) * 100;
      this.isPersent = persent;
      this.chartData = {
        labels: [`오늘 todo 달성${this.isPersent}%`],
        datasets: [
          {
            label: "오늘도 화이팅",
            data: [persent, 100],
            backgroundColor: "#6fafb8",
          },
        ],
      };
    },
  },
  computed: {
    getMyTodos() {
      return this.$store.getters.GETTERS_MY_TODOS;
    },
    chartPersent() {
      return this.isPersent;
    },
  },
  // deep속성을 추가하여 배열속 값까지 변경되는 부분을 캐치
  watch: {
    getMyTodos: {
      deep: true,
      async handler() {
        // console.log("변경감지");
        await this.checkTodo();
        // if (this.chartData.datasets[0].data[0] > 0) {
        //   this.changeLabel(this.chartData.datasets[0].data[0]);
        // }
      },
    },
    chartPersent(persent) {
      this.changeLabel(persent);
    },
  },
};
</script>

<style></style>
