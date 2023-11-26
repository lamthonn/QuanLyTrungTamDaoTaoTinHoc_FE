<template>
    <a-calendar v-model:value="value">
        <template #dateCellRender="{ current }">
            <ul class="events">
                <li v-for="item in getListData(current)" :key="item.content">
                    <a-badge :status="item.type" :text="item.content" />
                </li>
            </ul>
        </template>
        <template #monthCellRender="{ current }">
            <div v-if="getMonthData(current)" class="notes-month">
                <section>{{ getMonthData(current) }}</section>
                <span>Backlog number</span>
            </div>
        </template>
    </a-calendar>
</template>

<script>
import { ref } from 'vue';
import { Dayjs } from 'dayjs';
import { Calendar, Badge  } from 'ant-design-vue/es/components'

export default {
    components:{
        ACalendar:Calendar,
        ABadge:Badge
    },
    setup() {
        const value = ref()
        const getListData = (value) => {
            let listData;
            switch (value.date()) {
                case 3:
                    listData = [
                        { type: 'warning', content: "Khóa học:"},
                        { type: 'success', content: 'Phòng học:' },
                        { type: 'error', content: 'Giảng viên' },
                        
                    ];
                    break;
                case 6:
                    listData = [
                        { type: 'warning', content: 'Khóa học:' },
                        { type: 'success', content: 'Phòng học:' },
                        { type: 'error', content: 'Giảng viên' },
                        
                    ];
                    break;
                case 9:
                    listData = [
                        { type: 'warning', content: 'Khóa học:' },
                        { type: 'success', content: 'Phòng học:' },
                        { type: 'error', content: 'Giảng viên' },
                        
                    ];
                    break;
                case 12:
                    listData = [
                        { type: 'warning', content: 'Khóa học:' },
                        { type: 'success', content: 'Phòng học:' },
                        { type: 'error', content: 'Giảng viên' },
                        
                    ];
                    break;
                case 15:
                    listData = [
                        { type: 'warning', content: 'Khóa học:' },
                        { type: 'success', content: 'Phòng học:' },
                        { type: 'error', content: 'Giảng viên' },
                        
                    ];
                    break;
                case 18:
                    listData = [
                        { type: 'warning', content: 'Khóa học:' },
                        { type: 'success', content: 'Phòng học:' },
                        { type: 'error', content: 'Giảng viên' },
                        
                    ];
                    break;
                case 21:
                    listData = [
                        { type: 'warning', content: 'Khóa học:' },
                        { type: 'success', content: 'Phòng học:' },
                        { type: 'error', content: 'Giảng viên' },
                        
                    ];
                    break;
                case 24:
                    listData = [
                        { type: 'warning', content: 'Khóa học:' },
                        { type: 'success', content: 'Phòng học:' },
                        { type: 'error', content: 'Giảng viên' },
                        
                    ];
                    break;
                case 27:
                    listData = [
                        { type: 'warning', content: 'Khóa học:' },
                        { type: 'success', content: 'Phòng học:' },
                        { type: 'error', content: 'Giảng viên' },
                        
                    ];
                    break;
                case 30:
                    listData = [
                        { type: 'warning', content: 'Khóa học:' },
                        { type: 'success', content: 'Phòng học:' },
                        { type: 'error', content: 'Giảng viên' },
                        
                    ];
                    break;
                default:
            }
            return listData || [];
        };

        const getMonthData = (value) => {
            if (value.month() === 8) {
                return 1394;
            }
        };

        return {
            value,
            getListData,
            getMonthData,
        }
    }

}
</script>

<style scoped></style>