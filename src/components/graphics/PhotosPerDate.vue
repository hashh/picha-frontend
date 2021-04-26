<template>
    <v-card
        elevation="4"
        outlined
        class="ma-2"
    >
        <v-btn
            color="orange lighten-2"
            text
            @click="back"
        >
        back
        </v-btn>

        <v-card-text>
            Photos-Per-Date
        </v-card-text>
        <v-card-text>
            <d3-horizontal-bar
                :data="data"
                width="100%"
                height="400px">
            </d3-horizontal-bar>
        </v-card-text>

        <v-card-actions>
            <v-select
                v-model="time"
                label="Interval"
                :items="intervalOptions"
                item-text="name"
                item-value="value"
                return-value
                @change="changeInterval"
            >
            </v-select>
        </v-card-actions>
    </v-card>
</template>

<script>
import Photo from '../../services/photos';

export default {
    name: 'PhotosPerDate',
    mounted() {
        this.loadData();
        // criar um handler para o timer, desta maneira poderemos encerrar quando necessário
        this.execution = setInterval(() => this.loadData(), this.time);
    },
    data() {
        return {
            execution: null,
            data: [],
            photos: [],
            time: 10000,
            intervalOptions: [
                {
                    name: 'Every 10 seconds',
                    value: 10000,
                },
                {
                    name: 'Every 30 seconds',
                    value: 30000,
                },
                {
                    name: 'Every minute',
                    value: 100000,
                },
                {
                    name: 'Every 10 minutes',
                    value: 1000000,
                },
                {
                    name: 'Every 30 minutes',
                    value: 3000000,
                },
                {
                    name: 'Every hour',
                    value: 10000000,
                },
            ],
        };
    },
    methods: {
        back() {
            clearInterval(this.execution);
            this.$router.push({
                name: 'HomePage',
            });
        },
        changeInterval() {
            // Sempre que alterar o tempo, temos que limpar o handle criado anteriormente
            clearInterval(this.execution);
            this.execution = setInterval(() => this.loadData(), this.time);
        },
        loadData() {
            Photo.index().then(response => {
                this.photos = response.data;
                this.prepareData(response.data);
            }).catch((error) => {
                console.log(error)
            });
        },
        prepareData(rec) {
            // Mapear somente as datas
            const map = rec.map((el) => el.fulfilled_on.split('T')[0]);
            // Distinct nas datas
            const set = [...new Set(map)];
            // Filtrar os arrays para cada data distinta
            set.forEach((element) => {
                let ret = rec.filter((el) => el.fulfilled_on.split('T')[0] == element);
                // Insere os dados com o formato de objeto aceito pelo componente gráfico
                this.data.push({
                    key: element,
                    value: ret.length,
                });
            });
        },
    },
}
</script>

<style>
</style>
