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
      isPersent: 0,
      chartData: {
        labels: ["오늘 달성%"],
        datasets: [
          {
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
      // console.log("persent = ", persent);
      //  = persent;
      this.isPersent = persent;
      // console.log("chart - ", this.chartData.datasets[0].data[0]);
      this.chartData = {
        labels: ["오늘 달성%"],
        datasets: [
          {
            data: [persent, 100],
          },
        ],
      };
    },
  },
  computed: {
    getMyTodos() {
      return this.$store.getters.GETTERS_MY_TODOS;
    },
  },
  // deep속성을 추가하여 배열속 값까지 변경되는 부분을 캐치
  watch: {
    getMyTodos: {
      deep: true,
      async handler() {
        // console.log("변경감지");
        await this.checkTodo();
        this.chartData.datasets[0].data[0] = this.persent;
      },
    },
  },
};
</script>

<style></style>
