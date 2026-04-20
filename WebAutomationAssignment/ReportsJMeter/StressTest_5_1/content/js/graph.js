/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 296.0, "minX": 0.0, "maxY": 18098.0, "series": [{"data": [[0.0, 296.0], [0.1, 413.0], [0.2, 429.0], [0.3, 452.0], [0.4, 463.0], [0.5, 485.0], [0.6, 521.0], [0.7, 530.0], [0.8, 591.0], [0.9, 649.0], [1.0, 687.0], [1.1, 724.0], [1.2, 748.0], [1.3, 787.0], [1.4, 876.0], [1.5, 889.0], [1.6, 891.0], [1.7, 911.0], [1.8, 1041.0], [1.9, 1066.0], [2.0, 1072.0], [2.1, 1074.0], [2.2, 1086.0], [2.3, 1151.0], [2.4, 1187.0], [2.5, 1243.0], [2.6, 1269.0], [2.7, 1318.0], [2.8, 1394.0], [2.9, 1416.0], [3.0, 1427.0], [3.1, 1453.0], [3.2, 1461.0], [3.3, 1569.0], [3.4, 1573.0], [3.5, 1601.0], [3.6, 1639.0], [3.7, 1774.0], [3.8, 1779.0], [3.9, 1788.0], [4.0, 1823.0], [4.1, 1952.0], [4.2, 1961.0], [4.3, 1966.0], [4.4, 1975.0], [4.5, 2024.0], [4.6, 2076.0], [4.7, 2137.0], [4.8, 2143.0], [4.9, 2161.0], [5.0, 2227.0], [5.1, 2301.0], [5.2, 2351.0], [5.3, 2380.0], [5.4, 2391.0], [5.5, 2436.0], [5.6, 2461.0], [5.7, 2488.0], [5.8, 2520.0], [5.9, 2534.0], [6.0, 2591.0], [6.1, 2632.0], [6.2, 2665.0], [6.3, 2681.0], [6.4, 2771.0], [6.5, 2787.0], [6.6, 2845.0], [6.7, 2862.0], [6.8, 2863.0], [6.9, 2902.0], [7.0, 2987.0], [7.1, 3031.0], [7.2, 3038.0], [7.3, 3060.0], [7.4, 3169.0], [7.5, 3218.0], [7.6, 3279.0], [7.7, 3384.0], [7.8, 3398.0], [7.9, 3433.0], [8.0, 3446.0], [8.1, 3456.0], [8.2, 3497.0], [8.3, 3562.0], [8.4, 3600.0], [8.5, 3617.0], [8.6, 3628.0], [8.7, 3646.0], [8.8, 3699.0], [8.9, 3736.0], [9.0, 3749.0], [9.1, 3773.0], [9.2, 3793.0], [9.3, 3871.0], [9.4, 3916.0], [9.5, 4008.0], [9.6, 4059.0], [9.7, 4085.0], [9.8, 4108.0], [9.9, 4133.0], [10.0, 4173.0], [10.1, 4179.0], [10.2, 4281.0], [10.3, 4420.0], [10.4, 4480.0], [10.5, 4547.0], [10.6, 4553.0], [10.7, 4649.0], [10.8, 4675.0], [10.9, 4730.0], [11.0, 4804.0], [11.1, 4836.0], [11.2, 4894.0], [11.3, 4926.0], [11.4, 4950.0], [11.5, 4973.0], [11.6, 4986.0], [11.7, 5000.0], [11.8, 5049.0], [11.9, 5068.0], [12.0, 5079.0], [12.1, 5102.0], [12.2, 5118.0], [12.3, 5143.0], [12.4, 5177.0], [12.5, 5210.0], [12.6, 5228.0], [12.7, 5243.0], [12.8, 5305.0], [12.9, 5336.0], [13.0, 5359.0], [13.1, 5388.0], [13.2, 5451.0], [13.3, 5486.0], [13.4, 5526.0], [13.5, 5540.0], [13.6, 5574.0], [13.7, 5654.0], [13.8, 5721.0], [13.9, 5757.0], [14.0, 5797.0], [14.1, 5829.0], [14.2, 5875.0], [14.3, 5938.0], [14.4, 5957.0], [14.5, 6021.0], [14.6, 6038.0], [14.7, 6073.0], [14.8, 6097.0], [14.9, 6145.0], [15.0, 6200.0], [15.1, 6253.0], [15.2, 6273.0], [15.3, 6291.0], [15.4, 6364.0], [15.5, 6390.0], [15.6, 6456.0], [15.7, 6462.0], [15.8, 6468.0], [15.9, 6517.0], [16.0, 6531.0], [16.1, 6642.0], [16.2, 6685.0], [16.3, 6705.0], [16.4, 6786.0], [16.5, 6809.0], [16.6, 6822.0], [16.7, 6826.0], [16.8, 6842.0], [16.9, 6890.0], [17.0, 6936.0], [17.1, 6952.0], [17.2, 6954.0], [17.3, 7003.0], [17.4, 7011.0], [17.5, 7118.0], [17.6, 7138.0], [17.7, 7213.0], [17.8, 7335.0], [17.9, 7340.0], [18.0, 7374.0], [18.1, 7439.0], [18.2, 7460.0], [18.3, 7504.0], [18.4, 7545.0], [18.5, 7552.0], [18.6, 7598.0], [18.7, 7635.0], [18.8, 7647.0], [18.9, 7668.0], [19.0, 7686.0], [19.1, 7718.0], [19.2, 7843.0], [19.3, 7854.0], [19.4, 8035.0], [19.5, 8097.0], [19.6, 8163.0], [19.7, 8218.0], [19.8, 8237.0], [19.9, 8251.0], [20.0, 8353.0], [20.1, 8386.0], [20.2, 8403.0], [20.3, 8461.0], [20.4, 8483.0], [20.5, 8524.0], [20.6, 8571.0], [20.7, 8609.0], [20.8, 8639.0], [20.9, 8662.0], [21.0, 8675.0], [21.1, 8677.0], [21.2, 8688.0], [21.3, 8708.0], [21.4, 8712.0], [21.5, 8718.0], [21.6, 8723.0], [21.7, 8725.0], [21.8, 8729.0], [21.9, 8733.0], [22.0, 8735.0], [22.1, 8739.0], [22.2, 8742.0], [22.3, 8743.0], [22.4, 8745.0], [22.5, 8748.0], [22.6, 8749.0], [22.7, 8754.0], [22.8, 8758.0], [22.9, 8761.0], [23.0, 8762.0], [23.1, 8764.0], [23.2, 8767.0], [23.3, 8770.0], [23.4, 8772.0], [23.5, 8777.0], [23.6, 8779.0], [23.7, 8779.0], [23.8, 8782.0], [23.9, 8782.0], [24.0, 8783.0], [24.1, 8785.0], [24.2, 8787.0], [24.3, 8792.0], [24.4, 8796.0], [24.5, 8800.0], [24.6, 8801.0], [24.7, 8804.0], [24.8, 8805.0], [24.9, 8806.0], [25.0, 8808.0], [25.1, 8809.0], [25.2, 8810.0], [25.3, 8812.0], [25.4, 8813.0], [25.5, 8815.0], [25.6, 8817.0], [25.7, 8820.0], [25.8, 8821.0], [25.9, 8822.0], [26.0, 8824.0], [26.1, 8827.0], [26.2, 8828.0], [26.3, 8832.0], [26.4, 8833.0], [26.5, 8835.0], [26.6, 8837.0], [26.7, 8837.0], [26.8, 8840.0], [26.9, 8841.0], [27.0, 8843.0], [27.1, 8847.0], [27.2, 8848.0], [27.3, 8848.0], [27.4, 8852.0], [27.5, 8853.0], [27.6, 8854.0], [27.7, 8856.0], [27.8, 8857.0], [27.9, 8858.0], [28.0, 8858.0], [28.1, 8860.0], [28.2, 8862.0], [28.3, 8862.0], [28.4, 8862.0], [28.5, 8864.0], [28.6, 8864.0], [28.7, 8866.0], [28.8, 8867.0], [28.9, 8869.0], [29.0, 8870.0], [29.1, 8871.0], [29.2, 8873.0], [29.3, 8875.0], [29.4, 8877.0], [29.5, 8879.0], [29.6, 8880.0], [29.7, 8881.0], [29.8, 8883.0], [29.9, 8884.0], [30.0, 8885.0], [30.1, 8886.0], [30.2, 8888.0], [30.3, 8890.0], [30.4, 8891.0], [30.5, 8893.0], [30.6, 8894.0], [30.7, 8895.0], [30.8, 8896.0], [30.9, 8897.0], [31.0, 8899.0], [31.1, 8900.0], [31.2, 8902.0], [31.3, 8902.0], [31.4, 8903.0], [31.5, 8904.0], [31.6, 8905.0], [31.7, 8907.0], [31.8, 8908.0], [31.9, 8908.0], [32.0, 8910.0], [32.1, 8910.0], [32.2, 8910.0], [32.3, 8911.0], [32.4, 8911.0], [32.5, 8911.0], [32.6, 8912.0], [32.7, 8912.0], [32.8, 8912.0], [32.9, 8912.0], [33.0, 8913.0], [33.1, 8913.0], [33.2, 8913.0], [33.3, 8913.0], [33.4, 8914.0], [33.5, 8914.0], [33.6, 8915.0], [33.7, 8915.0], [33.8, 8916.0], [33.9, 8916.0], [34.0, 8917.0], [34.1, 8918.0], [34.2, 8919.0], [34.3, 8919.0], [34.4, 8919.0], [34.5, 8920.0], [34.6, 8921.0], [34.7, 8921.0], [34.8, 8921.0], [34.9, 8922.0], [35.0, 8923.0], [35.1, 8923.0], [35.2, 8924.0], [35.3, 8924.0], [35.4, 8925.0], [35.5, 8925.0], [35.6, 8926.0], [35.7, 8927.0], [35.8, 8928.0], [35.9, 8928.0], [36.0, 8930.0], [36.1, 8931.0], [36.2, 8932.0], [36.3, 8932.0], [36.4, 8933.0], [36.5, 8934.0], [36.6, 8935.0], [36.7, 8936.0], [36.8, 8936.0], [36.9, 8938.0], [37.0, 8940.0], [37.1, 8941.0], [37.2, 8941.0], [37.3, 8943.0], [37.4, 8944.0], [37.5, 8944.0], [37.6, 8945.0], [37.7, 8945.0], [37.8, 8946.0], [37.9, 8947.0], [38.0, 8947.0], [38.1, 8948.0], [38.2, 8949.0], [38.3, 8950.0], [38.4, 8951.0], [38.5, 8951.0], [38.6, 8953.0], [38.7, 8953.0], [38.8, 8954.0], [38.9, 8955.0], [39.0, 8956.0], [39.1, 8956.0], [39.2, 8957.0], [39.3, 8957.0], [39.4, 8959.0], [39.5, 8960.0], [39.6, 8961.0], [39.7, 8961.0], [39.8, 8962.0], [39.9, 8963.0], [40.0, 8963.0], [40.1, 8963.0], [40.2, 8964.0], [40.3, 8965.0], [40.4, 8967.0], [40.5, 8968.0], [40.6, 8968.0], [40.7, 8970.0], [40.8, 8971.0], [40.9, 8972.0], [41.0, 8973.0], [41.1, 8975.0], [41.2, 8976.0], [41.3, 8978.0], [41.4, 8978.0], [41.5, 8979.0], [41.6, 8980.0], [41.7, 8982.0], [41.8, 8983.0], [41.9, 8983.0], [42.0, 8986.0], [42.1, 8987.0], [42.2, 8987.0], [42.3, 8987.0], [42.4, 8988.0], [42.5, 8991.0], [42.6, 8991.0], [42.7, 8992.0], [42.8, 8994.0], [42.9, 8995.0], [43.0, 8996.0], [43.1, 8996.0], [43.2, 8997.0], [43.3, 8998.0], [43.4, 8999.0], [43.5, 9000.0], [43.6, 9000.0], [43.7, 9001.0], [43.8, 9002.0], [43.9, 9002.0], [44.0, 9003.0], [44.1, 9004.0], [44.2, 9005.0], [44.3, 9006.0], [44.4, 9007.0], [44.5, 9008.0], [44.6, 9009.0], [44.7, 9010.0], [44.8, 9010.0], [44.9, 9011.0], [45.0, 9011.0], [45.1, 9013.0], [45.2, 9013.0], [45.3, 9014.0], [45.4, 9014.0], [45.5, 9015.0], [45.6, 9016.0], [45.7, 9018.0], [45.8, 9019.0], [45.9, 9020.0], [46.0, 9020.0], [46.1, 9020.0], [46.2, 9021.0], [46.3, 9022.0], [46.4, 9022.0], [46.5, 9024.0], [46.6, 9024.0], [46.7, 9025.0], [46.8, 9026.0], [46.9, 9027.0], [47.0, 9027.0], [47.1, 9028.0], [47.2, 9029.0], [47.3, 9029.0], [47.4, 9030.0], [47.5, 9030.0], [47.6, 9031.0], [47.7, 9031.0], [47.8, 9032.0], [47.9, 9033.0], [48.0, 9033.0], [48.1, 9034.0], [48.2, 9034.0], [48.3, 9035.0], [48.4, 9035.0], [48.5, 9036.0], [48.6, 9036.0], [48.7, 9037.0], [48.8, 9037.0], [48.9, 9038.0], [49.0, 9039.0], [49.1, 9040.0], [49.2, 9040.0], [49.3, 9041.0], [49.4, 9041.0], [49.5, 9043.0], [49.6, 9044.0], [49.7, 9045.0], [49.8, 9046.0], [49.9, 9046.0], [50.0, 9047.0], [50.1, 9047.0], [50.2, 9047.0], [50.3, 9048.0], [50.4, 9048.0], [50.5, 9048.0], [50.6, 9049.0], [50.7, 9049.0], [50.8, 9050.0], [50.9, 9051.0], [51.0, 9051.0], [51.1, 9052.0], [51.2, 9053.0], [51.3, 9054.0], [51.4, 9054.0], [51.5, 9054.0], [51.6, 9055.0], [51.7, 9055.0], [51.8, 9057.0], [51.9, 9058.0], [52.0, 9059.0], [52.1, 9059.0], [52.2, 9059.0], [52.3, 9060.0], [52.4, 9060.0], [52.5, 9061.0], [52.6, 9063.0], [52.7, 9064.0], [52.8, 9065.0], [52.9, 9066.0], [53.0, 9067.0], [53.1, 9068.0], [53.2, 9069.0], [53.3, 9069.0], [53.4, 9070.0], [53.5, 9072.0], [53.6, 9073.0], [53.7, 9074.0], [53.8, 9075.0], [53.9, 9076.0], [54.0, 9077.0], [54.1, 9078.0], [54.2, 9079.0], [54.3, 9080.0], [54.4, 9081.0], [54.5, 9082.0], [54.6, 9082.0], [54.7, 9083.0], [54.8, 9083.0], [54.9, 9084.0], [55.0, 9085.0], [55.1, 9085.0], [55.2, 9085.0], [55.3, 9086.0], [55.4, 9087.0], [55.5, 9088.0], [55.6, 9088.0], [55.7, 9088.0], [55.8, 9089.0], [55.9, 9090.0], [56.0, 9091.0], [56.1, 9092.0], [56.2, 9094.0], [56.3, 9095.0], [56.4, 9096.0], [56.5, 9096.0], [56.6, 9098.0], [56.7, 9098.0], [56.8, 9099.0], [56.9, 9100.0], [57.0, 9101.0], [57.1, 9102.0], [57.2, 9102.0], [57.3, 9103.0], [57.4, 9105.0], [57.5, 9105.0], [57.6, 9106.0], [57.7, 9107.0], [57.8, 9108.0], [57.9, 9108.0], [58.0, 9109.0], [58.1, 9110.0], [58.2, 9111.0], [58.3, 9112.0], [58.4, 9113.0], [58.5, 9113.0], [58.6, 9114.0], [58.7, 9114.0], [58.8, 9115.0], [58.9, 9115.0], [59.0, 9116.0], [59.1, 9117.0], [59.2, 9117.0], [59.3, 9118.0], [59.4, 9118.0], [59.5, 9118.0], [59.6, 9120.0], [59.7, 9121.0], [59.8, 9122.0], [59.9, 9123.0], [60.0, 9123.0], [60.1, 9124.0], [60.2, 9125.0], [60.3, 9125.0], [60.4, 9126.0], [60.5, 9126.0], [60.6, 9127.0], [60.7, 9128.0], [60.8, 9129.0], [60.9, 9130.0], [61.0, 9131.0], [61.1, 9131.0], [61.2, 9132.0], [61.3, 9134.0], [61.4, 9135.0], [61.5, 9136.0], [61.6, 9137.0], [61.7, 9138.0], [61.8, 9139.0], [61.9, 9141.0], [62.0, 9141.0], [62.1, 9141.0], [62.2, 9142.0], [62.3, 9142.0], [62.4, 9143.0], [62.5, 9143.0], [62.6, 9144.0], [62.7, 9145.0], [62.8, 9145.0], [62.9, 9146.0], [63.0, 9147.0], [63.1, 9148.0], [63.2, 9148.0], [63.3, 9149.0], [63.4, 9149.0], [63.5, 9150.0], [63.6, 9150.0], [63.7, 9151.0], [63.8, 9152.0], [63.9, 9153.0], [64.0, 9154.0], [64.1, 9154.0], [64.2, 9155.0], [64.3, 9156.0], [64.4, 9157.0], [64.5, 9159.0], [64.6, 9159.0], [64.7, 9160.0], [64.8, 9161.0], [64.9, 9161.0], [65.0, 9161.0], [65.1, 9162.0], [65.2, 9163.0], [65.3, 9164.0], [65.4, 9165.0], [65.5, 9167.0], [65.6, 9168.0], [65.7, 9169.0], [65.8, 9169.0], [65.9, 9169.0], [66.0, 9170.0], [66.1, 9171.0], [66.2, 9171.0], [66.3, 9172.0], [66.4, 9173.0], [66.5, 9173.0], [66.6, 9174.0], [66.7, 9174.0], [66.8, 9175.0], [66.9, 9176.0], [67.0, 9176.0], [67.1, 9177.0], [67.2, 9178.0], [67.3, 9178.0], [67.4, 9180.0], [67.5, 9181.0], [67.6, 9181.0], [67.7, 9182.0], [67.8, 9183.0], [67.9, 9184.0], [68.0, 9185.0], [68.1, 9186.0], [68.2, 9186.0], [68.3, 9187.0], [68.4, 9188.0], [68.5, 9189.0], [68.6, 9190.0], [68.7, 9191.0], [68.8, 9192.0], [68.9, 9192.0], [69.0, 9193.0], [69.1, 9195.0], [69.2, 9196.0], [69.3, 9197.0], [69.4, 9198.0], [69.5, 9199.0], [69.6, 9200.0], [69.7, 9201.0], [69.8, 9202.0], [69.9, 9202.0], [70.0, 9205.0], [70.1, 9206.0], [70.2, 9207.0], [70.3, 9207.0], [70.4, 9208.0], [70.5, 9209.0], [70.6, 9209.0], [70.7, 9210.0], [70.8, 9211.0], [70.9, 9211.0], [71.0, 9212.0], [71.1, 9213.0], [71.2, 9214.0], [71.3, 9214.0], [71.4, 9215.0], [71.5, 9216.0], [71.6, 9217.0], [71.7, 9218.0], [71.8, 9218.0], [71.9, 9219.0], [72.0, 9219.0], [72.1, 9221.0], [72.2, 9222.0], [72.3, 9223.0], [72.4, 9223.0], [72.5, 9225.0], [72.6, 9226.0], [72.7, 9226.0], [72.8, 9227.0], [72.9, 9228.0], [73.0, 9229.0], [73.1, 9230.0], [73.2, 9230.0], [73.3, 9231.0], [73.4, 9231.0], [73.5, 9232.0], [73.6, 9233.0], [73.7, 9233.0], [73.8, 9234.0], [73.9, 9234.0], [74.0, 9235.0], [74.1, 9235.0], [74.2, 9236.0], [74.3, 9236.0], [74.4, 9236.0], [74.5, 9237.0], [74.6, 9238.0], [74.7, 9238.0], [74.8, 9239.0], [74.9, 9241.0], [75.0, 9242.0], [75.1, 9242.0], [75.2, 9244.0], [75.3, 9245.0], [75.4, 9247.0], [75.5, 9247.0], [75.6, 9248.0], [75.7, 9249.0], [75.8, 9250.0], [75.9, 9250.0], [76.0, 9251.0], [76.1, 9251.0], [76.2, 9253.0], [76.3, 9254.0], [76.4, 9255.0], [76.5, 9256.0], [76.6, 9257.0], [76.7, 9259.0], [76.8, 9261.0], [76.9, 9262.0], [77.0, 9262.0], [77.1, 9264.0], [77.2, 9265.0], [77.3, 9265.0], [77.4, 9267.0], [77.5, 9267.0], [77.6, 9268.0], [77.7, 9269.0], [77.8, 9270.0], [77.9, 9271.0], [78.0, 9271.0], [78.1, 9271.0], [78.2, 9273.0], [78.3, 9273.0], [78.4, 9274.0], [78.5, 9275.0], [78.6, 9276.0], [78.7, 9277.0], [78.8, 9277.0], [78.9, 9278.0], [79.0, 9279.0], [79.1, 9280.0], [79.2, 9281.0], [79.3, 9283.0], [79.4, 9286.0], [79.5, 9287.0], [79.6, 9288.0], [79.7, 9289.0], [79.8, 9290.0], [79.9, 9290.0], [80.0, 9292.0], [80.1, 9293.0], [80.2, 9294.0], [80.3, 9295.0], [80.4, 9296.0], [80.5, 9297.0], [80.6, 9298.0], [80.7, 9299.0], [80.8, 9300.0], [80.9, 9301.0], [81.0, 9302.0], [81.1, 9303.0], [81.2, 9304.0], [81.3, 9305.0], [81.4, 9307.0], [81.5, 9307.0], [81.6, 9308.0], [81.7, 9309.0], [81.8, 9309.0], [81.9, 9310.0], [82.0, 9310.0], [82.1, 9313.0], [82.2, 9314.0], [82.3, 9315.0], [82.4, 9316.0], [82.5, 9317.0], [82.6, 9319.0], [82.7, 9320.0], [82.8, 9321.0], [82.9, 9323.0], [83.0, 9324.0], [83.1, 9326.0], [83.2, 9326.0], [83.3, 9327.0], [83.4, 9327.0], [83.5, 9328.0], [83.6, 9329.0], [83.7, 9329.0], [83.8, 9330.0], [83.9, 9331.0], [84.0, 9331.0], [84.1, 9332.0], [84.2, 9334.0], [84.3, 9334.0], [84.4, 9336.0], [84.5, 9338.0], [84.6, 9339.0], [84.7, 9339.0], [84.8, 9340.0], [84.9, 9342.0], [85.0, 9342.0], [85.1, 9343.0], [85.2, 9343.0], [85.3, 9345.0], [85.4, 9346.0], [85.5, 9347.0], [85.6, 9350.0], [85.7, 9352.0], [85.8, 9354.0], [85.9, 9355.0], [86.0, 9357.0], [86.1, 9358.0], [86.2, 9359.0], [86.3, 9361.0], [86.4, 9363.0], [86.5, 9364.0], [86.6, 9365.0], [86.7, 9366.0], [86.8, 9368.0], [86.9, 9370.0], [87.0, 9370.0], [87.1, 9371.0], [87.2, 9372.0], [87.3, 9373.0], [87.4, 9375.0], [87.5, 9377.0], [87.6, 9377.0], [87.7, 9380.0], [87.8, 9383.0], [87.9, 9384.0], [88.0, 9387.0], [88.1, 9389.0], [88.2, 9390.0], [88.3, 9391.0], [88.4, 9394.0], [88.5, 9396.0], [88.6, 9398.0], [88.7, 9399.0], [88.8, 9402.0], [88.9, 9404.0], [89.0, 9405.0], [89.1, 9407.0], [89.2, 9408.0], [89.3, 9409.0], [89.4, 9410.0], [89.5, 9411.0], [89.6, 9413.0], [89.7, 9414.0], [89.8, 9415.0], [89.9, 9419.0], [90.0, 9422.0], [90.1, 9423.0], [90.2, 9424.0], [90.3, 9424.0], [90.4, 9428.0], [90.5, 9429.0], [90.6, 9431.0], [90.7, 9432.0], [90.8, 9433.0], [90.9, 9434.0], [91.0, 9435.0], [91.1, 9435.0], [91.2, 9436.0], [91.3, 9437.0], [91.4, 9437.0], [91.5, 9437.0], [91.6, 9438.0], [91.7, 9439.0], [91.8, 9439.0], [91.9, 9440.0], [92.0, 9441.0], [92.1, 9442.0], [92.2, 9443.0], [92.3, 9444.0], [92.4, 9447.0], [92.5, 9447.0], [92.6, 9448.0], [92.7, 9451.0], [92.8, 9452.0], [92.9, 9456.0], [93.0, 9457.0], [93.1, 9458.0], [93.2, 9467.0], [93.3, 9469.0], [93.4, 9472.0], [93.5, 9475.0], [93.6, 9476.0], [93.7, 9478.0], [93.8, 9481.0], [93.9, 9483.0], [94.0, 9485.0], [94.1, 9490.0], [94.2, 9490.0], [94.3, 9493.0], [94.4, 9494.0], [94.5, 9496.0], [94.6, 9498.0], [94.7, 9501.0], [94.8, 9505.0], [94.9, 9510.0], [95.0, 9512.0], [95.1, 9518.0], [95.2, 9527.0], [95.3, 9530.0], [95.4, 9534.0], [95.5, 9536.0], [95.6, 9542.0], [95.7, 9547.0], [95.8, 9549.0], [95.9, 9554.0], [96.0, 9560.0], [96.1, 9567.0], [96.2, 9574.0], [96.3, 9575.0], [96.4, 9580.0], [96.5, 9587.0], [96.6, 9590.0], [96.7, 9595.0], [96.8, 9600.0], [96.9, 9608.0], [97.0, 9615.0], [97.1, 9617.0], [97.2, 9620.0], [97.3, 9626.0], [97.4, 9631.0], [97.5, 9634.0], [97.6, 9640.0], [97.7, 9648.0], [97.8, 9656.0], [97.9, 9665.0], [98.0, 9670.0], [98.1, 9684.0], [98.2, 9704.0], [98.3, 9716.0], [98.4, 9724.0], [98.5, 9727.0], [98.6, 9735.0], [98.7, 9757.0], [98.8, 9764.0], [98.9, 9772.0], [99.0, 9785.0], [99.1, 9816.0], [99.2, 9831.0], [99.3, 9862.0], [99.4, 9891.0], [99.5, 9938.0], [99.6, 9986.0], [99.7, 10078.0], [99.8, 10196.0], [99.9, 10409.0]], "isOverall": false, "label": "Login Test", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 449.0, "series": [{"data": [[200.0, 1.0], [300.0, 2.0], [400.0, 15.0], [500.0, 9.0], [600.0, 7.0], [700.0, 10.0], [800.0, 11.0], [900.0, 3.0], [1000.0, 18.0], [1100.0, 6.0], [1200.0, 7.0], [1300.0, 7.0], [1400.0, 14.0], [1500.0, 7.0], [1600.0, 5.0], [1700.0, 12.0], [1800.0, 4.0], [1900.0, 12.0], [2000.0, 6.0], [2100.0, 10.0], [2200.0, 5.0], [2300.0, 11.0], [2400.0, 10.0], [2500.0, 10.0], [2600.0, 11.0], [2700.0, 7.0], [2800.0, 12.0], [2900.0, 4.0], [3000.0, 10.0], [3100.0, 5.0], [3300.0, 7.0], [3200.0, 5.0], [3400.0, 14.0], [3500.0, 5.0], [3700.0, 13.0], [3600.0, 15.0], [3800.0, 4.0], [3900.0, 5.0], [4000.0, 8.0], [4100.0, 14.0], [4200.0, 4.0], [4300.0, 1.0], [4400.0, 5.0], [4600.0, 6.0], [4500.0, 8.0], [4700.0, 5.0], [4800.0, 8.0], [4900.0, 15.0], [5000.0, 13.0], [5100.0, 14.0], [5200.0, 10.0], [5300.0, 11.0], [5400.0, 9.0], [5500.0, 8.0], [5600.0, 5.0], [5700.0, 9.0], [5800.0, 6.0], [6000.0, 13.0], [5900.0, 8.0], [6100.0, 5.0], [6200.0, 12.0], [6300.0, 6.0], [6400.0, 13.0], [6500.0, 5.0], [6600.0, 8.0], [6700.0, 6.0], [6800.0, 15.0], [6900.0, 12.0], [7000.0, 8.0], [7100.0, 5.0], [7200.0, 4.0], [7300.0, 10.0], [7400.0, 6.0], [7600.0, 15.0], [7500.0, 13.0], [7800.0, 8.0], [7700.0, 2.0], [7900.0, 1.0], [8000.0, 4.0], [8100.0, 5.0], [8300.0, 9.0], [8200.0, 8.0], [8400.0, 11.0], [8600.0, 21.0], [8500.0, 5.0], [8700.0, 108.0], [8800.0, 221.0], [9000.0, 449.0], [9100.0, 427.0], [9200.0, 379.0], [8900.0, 419.0], [9700.0, 28.0], [9300.0, 268.0], [9400.0, 198.0], [9600.0, 48.0], [9500.0, 72.0], [10100.0, 4.0], [9900.0, 7.0], [9800.0, 14.0], [10000.0, 2.0], [10200.0, 1.0], [10400.0, 1.0], [10300.0, 1.0], [14100.0, 1.0], [17500.0, 1.0], [18000.0, 1.0]], "isOverall": false, "label": "Login Test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 18000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 18.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3256.0, "series": [{"data": [[0.0, 18.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 92.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3256.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 37.199551569506724, "minX": 1.77664626E12, "maxY": 100.0, "series": [{"data": [[1.77664638E12, 100.0], [1.77664632E12, 95.70075187969924], [1.7766465E12, 100.0], [1.77664644E12, 100.0], [1.77664626E12, 37.199551569506724], [1.77664656E12, 83.05821917808211]], "isOverall": false, "label": "LoadTest_100Users_SteadyState", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77664656E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 574.6666666666666, "minX": 1.0, "maxY": 9370.0, "series": [{"data": [[2.0, 5046.5], [3.0, 3483.0], [4.0, 574.6666666666666], [5.0, 4010.0], [6.0, 1714.0], [7.0, 1631.75], [8.0, 1707.25], [9.0, 2089.4285714285716], [10.0, 2026.4285714285713], [11.0, 1846.25], [12.0, 1865.125], [13.0, 2325.142857142857], [14.0, 2254.5714285714284], [15.0, 2126.0], [16.0, 2347.4285714285716], [17.0, 2208.8888888888887], [18.0, 2577.142857142857], [19.0, 2594.5714285714284], [20.0, 2467.875], [21.0, 1626.142857142857], [22.0, 3179.8], [23.0, 2964.4285714285716], [24.0, 2932.714285714286], [25.0, 2776.3333333333335], [26.0, 3118.0], [27.0, 3107.285714285714], [28.0, 3182.0], [29.0, 3080.4444444444443], [30.0, 3336.5714285714284], [31.0, 3205.6666666666665], [32.0, 3493.7142857142853], [33.0, 3480.0], [34.0, 3372.5555555555557], [35.0, 3609.5714285714284], [36.0, 3477.1111111111113], [37.0, 3875.285714285714], [38.0, 3845.857142857143], [39.0, 3827.375], [40.0, 3804.25], [41.0, 4109.571428571428], [42.0, 4176.857142857143], [43.0, 4113.5], [44.0, 4244.5], [45.0, 4169.555555555556], [46.0, 4573.166666666666], [47.0, 4369.125], [48.0, 4348.111111111111], [49.0, 4625.857142857143], [50.0, 4739.285714285715], [51.0, 4539.888888888889], [52.0, 4761.285714285715], [53.0, 4719.5], [54.0, 4802.375], [55.0, 5027.0], [56.0, 5378.333333333334], [57.0, 5222.0], [58.0, 5276.25], [59.0, 5301.5], [60.0, 5480.875], [61.0, 5492.571428571428], [62.0, 5581.714285714285], [63.0, 5569.75], [64.0, 5584.5], [65.0, 5563.375], [66.0, 5612.875], [67.0, 5752.571428571429], [68.0, 5710.5], [69.0, 5979.714285714285], [70.0, 6050.428571428572], [71.0, 5940.777777777777], [72.0, 6033.142857142857], [73.0, 6147.111111111111], [74.0, 6248.714285714286], [75.0, 6305.75], [76.0, 6311.0], [77.0, 6444.714285714285], [78.0, 6471.111111111111], [79.0, 6630.5], [80.0, 6688.571428571428], [81.0, 6657.875], [82.0, 6727.250000000001], [83.0, 6815.857142857142], [84.0, 6901.428571428572], [85.0, 6922.888888888889], [86.0, 7124.833333333334], [87.0, 6364.444444444444], [88.0, 7117.25], [89.0, 7287.428571428571], [90.0, 7231.375], [91.0, 7247.999999999999], [92.0, 7516.749999999999], [93.0, 7486.777777777777], [94.0, 7542.714285714285], [95.0, 7666.625], [96.0, 7657.374999999999], [97.0, 7752.285714285715], [98.0, 7829.0], [99.0, 8508.625], [100.0, 9118.512362114883], [1.0, 9370.0]], "isOverall": false, "label": "Login Test", "isController": false}, {"data": [[89.35977421271554, 8162.944741532987]], "isOverall": false, "label": "Login Test-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1260.4666666666667, "minX": 1.77664626E12, "maxY": 10872.75, "series": [{"data": [[1.77664638E12, 10823.7], [1.77664632E12, 10872.75], [1.7766465E12, 10709.25], [1.77664644E12, 10562.1], [1.77664626E12, 7292.1], [1.77664656E12, 4774.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77664638E12, 2857.633333333333], [1.77664632E12, 2870.5833333333335], [1.7766465E12, 2827.4166666666665], [1.77664644E12, 2788.5666666666666], [1.77664626E12, 1925.2333333333333], [1.77664656E12, 1260.4666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77664656E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2929.1905829596412, "minX": 1.77664626E12, "maxY": 9309.074303405567, "series": [{"data": [[1.77664638E12, 9034.365558912381], [1.77664632E12, 8252.100751879694], [1.7766465E12, 9128.870229007647], [1.77664644E12, 9309.074303405567], [1.77664626E12, 2929.1905829596412], [1.77664656E12, 9275.972602739736]], "isOverall": false, "label": "Login Test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77664656E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 2928.0201793721985, "minX": 1.77664626E12, "maxY": 9307.130030959735, "series": [{"data": [[1.77664638E12, 9031.859516616309], [1.77664632E12, 8249.924812030067], [1.7766465E12, 9126.709923664128], [1.77664644E12, 9307.130030959735], [1.77664626E12, 2928.0201793721985], [1.77664656E12, 9273.352739726031]], "isOverall": false, "label": "Login Test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77664656E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 24.852941176470594, "minX": 1.77664626E12, "maxY": 35.7431506849315, "series": [{"data": [[1.77664638E12, 26.265861027190336], [1.77664632E12, 26.362406015037596], [1.7766465E12, 26.418320610687022], [1.77664644E12, 24.852941176470594], [1.77664626E12, 28.623318385650226], [1.77664656E12, 35.7431506849315]], "isOverall": false, "label": "Login Test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77664656E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 296.0, "minX": 1.77664626E12, "maxY": 18098.0, "series": [{"data": [[1.77664638E12, 17550.0], [1.77664632E12, 14155.0], [1.7766465E12, 10059.0], [1.77664644E12, 10409.0], [1.77664626E12, 6062.0], [1.77664656E12, 18098.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77664638E12, 366.0], [1.77664632E12, 296.0], [1.7766465E12, 8637.0], [1.77664644E12, 8862.0], [1.77664626E12, 377.0], [1.77664656E12, 443.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77664638E12, 9303.2], [1.77664632E12, 9203.4], [1.7766465E12, 9371.4], [1.77664644E12, 9593.6], [1.77664626E12, 5090.0], [1.77664656E12, 9502.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77664638E12, 9823.59], [1.77664632E12, 9620.0], [1.7766465E12, 9731.079999999996], [1.77664644E12, 9975.66], [1.77664626E12, 5503.599999999999], [1.77664656E12, 9896.949999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77664638E12, 8996.5], [1.77664632E12, 8853.0], [1.7766465E12, 9082.0], [1.77664644E12, 9265.0], [1.77664626E12, 2862.0], [1.77664656E12, 9272.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77664638E12, 9434.55], [1.77664632E12, 9280.7], [1.7766465E12, 9436.4], [1.77664644E12, 9697.0], [1.77664626E12, 5241.6], [1.77664656E12, 9628.85]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77664656E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 642.0, "minX": 1.0, "maxY": 9329.5, "series": [{"data": [[1.0, 5076.5], [8.0, 9329.5], [9.0, 9096.0], [10.0, 9050.5], [11.0, 9080.0], [3.0, 642.0], [12.0, 8979.0], [13.0, 9135.0], [14.0, 4724.5], [7.0, 9183.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 642.0, "minX": 1.0, "maxY": 9329.5, "series": [{"data": [[1.0, 5074.5], [8.0, 9329.5], [9.0, 9091.5], [10.0, 9049.0], [11.0, 9075.0], [3.0, 642.0], [12.0, 8977.5], [13.0, 9135.0], [14.0, 4724.5], [7.0, 9183.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 14.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.2, "minX": 1.77664626E12, "maxY": 11.566666666666666, "series": [{"data": [[1.77664638E12, 11.033333333333333], [1.77664632E12, 11.566666666666666], [1.7766465E12, 10.916666666666666], [1.77664644E12, 10.766666666666667], [1.77664626E12, 8.616666666666667], [1.77664656E12, 3.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77664656E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 4.866666666666666, "minX": 1.77664626E12, "maxY": 11.083333333333334, "series": [{"data": [[1.77664638E12, 11.033333333333333], [1.77664632E12, 11.083333333333334], [1.7766465E12, 10.916666666666666], [1.77664644E12, 10.766666666666667], [1.77664626E12, 7.433333333333334], [1.77664656E12, 4.866666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77664656E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 4.866666666666666, "minX": 1.77664626E12, "maxY": 11.083333333333334, "series": [{"data": [[1.77664638E12, 11.033333333333333], [1.77664632E12, 11.083333333333334], [1.7766465E12, 10.916666666666666], [1.77664644E12, 10.766666666666667], [1.77664626E12, 7.433333333333334], [1.77664656E12, 4.866666666666666]], "isOverall": false, "label": "Login Test-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77664656E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 4.866666666666666, "minX": 1.77664626E12, "maxY": 11.083333333333334, "series": [{"data": [[1.77664638E12, 11.033333333333333], [1.77664632E12, 11.083333333333334], [1.7766465E12, 10.916666666666666], [1.77664644E12, 10.766666666666667], [1.77664626E12, 7.433333333333334], [1.77664656E12, 4.866666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77664656E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

