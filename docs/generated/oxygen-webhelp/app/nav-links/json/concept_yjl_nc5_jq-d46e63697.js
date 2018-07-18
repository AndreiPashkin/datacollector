define({"topics" : [{"title":"Processors","shortdesc":"\n            <p class=\"shortdesc\"></p>\n         ","href":"datacollector\/UserGuide\/Processors\/Processors_overview.html#concept_hpr_twm_jq","attributes": {"data-id":"concept_hpr_twm_jq",},"menu": {"hasChildren":false,},"tocID":"concept_hpr_twm_jq-d46e63719","topics":[]},{"title":"Aggregator","href":"datacollector\/UserGuide\/Processors\/Aggregator.html#concept_ofb_svm_5bb","attributes": {"data-id":"concept_ofb_svm_5bb",},"menu": {"hasChildren":true,},"tocID":"concept_ofb_svm_5bb-d46e63743","next":"concept_ofb_svm_5bb-d46e63743",},{"title":"Base64 Field Decoder","shortdesc":"\n            <p class=\"shortdesc\">The Base64 Field Decoder decodes Base64 encoded data to binary data. Use the processor         to decode Base64 encoded data\n               before evaluating data in the field.\n            </p>\n         ","href":"datacollector\/UserGuide\/Processors\/Base64Decoder.html#concept_ujj_spy_kv","attributes": {"data-id":"concept_ujj_spy_kv",},"menu": {"hasChildren":true,},"tocID":"concept_ujj_spy_kv-d46e64540","next":"concept_ujj_spy_kv-d46e64540",},{"title":"Base64 Field Encoder","shortdesc":"\n            <p class=\"shortdesc\">The Base64 Field Encoder encodes binary data using Base64. Use the processor to encode         binary data that must be sent\n               over channels that expect ASCII data.\n            </p>\n         ","href":"datacollector\/UserGuide\/Processors\/Base64Encoder.html#concept_wtr_mpy_kv","attributes": {"data-id":"concept_wtr_mpy_kv",},"menu": {"hasChildren":true,},"tocID":"concept_wtr_mpy_kv-d46e64597","next":"concept_wtr_mpy_kv-d46e64597",},{"title":"Data Parser","shortdesc":"\n            <p class=\"shortdesc\">The Data Parser processor allows you to parse supported data formats embedded in a         field. You can parse NetFlow embedded\n               in a byte array field or syslog messages embedded in a         string field. \n            </p>\n         ","href":"datacollector\/UserGuide\/Processors\/DataParser.html#concept_xw3_4xk_r1b","attributes": {"data-id":"concept_xw3_4xk_r1b",},"menu": {"hasChildren":true,},"tocID":"concept_xw3_4xk_r1b-d46e64654","next":"concept_xw3_4xk_r1b-d46e64654",},{"title":"Delay","href":"datacollector\/UserGuide\/Processors\/Delay.html#concept_ez5_pvf_wbb","attributes": {"data-id":"concept_ez5_pvf_wbb",},"menu": {"hasChildren":true,},"tocID":"concept_ez5_pvf_wbb-d46e64753","next":"concept_ez5_pvf_wbb-d46e64753",},{"title":"Expression Evaluator","href":"datacollector\/UserGuide\/Processors\/Expression.html#concept_zm2_pp3_wq","attributes": {"data-id":"concept_zm2_pp3_wq",},"menu": {"hasChildren":true,},"tocID":"concept_zm2_pp3_wq-d46e64807","next":"concept_zm2_pp3_wq-d46e64807",},{"title":"Field Flattener","href":"datacollector\/UserGuide\/Processors\/FieldFlattener.html#concept_njn_3kk_fx","attributes": {"data-id":"concept_njn_3kk_fx",},"menu": {"hasChildren":true,},"tocID":"concept_njn_3kk_fx-d46e65017","next":"concept_njn_3kk_fx-d46e65017",},{"title":"Field Hasher","shortdesc":"\n            <p class=\"shortdesc\">The Field Hasher uses an algorithm to encode data. Use Field Hasher to encode         highly-sensitive data. For example,\n               you might use Field Hasher to encode social security or         credit card numbers.\n            </p>\n         ","href":"datacollector\/UserGuide\/Processors\/FieldHasher.html#concept_ivv_c3k_wq","attributes": {"data-id":"concept_ivv_c3k_wq",},"menu": {"hasChildren":true,},"tocID":"concept_ivv_c3k_wq-d46e65165","next":"concept_ivv_c3k_wq-d46e65165",},{"title":"Field Masker","shortdesc":"\n            <p class=\"shortdesc\">The Field Masker masks string values based on the selected mask type. You can use     variable-length, fixed-length, custom,\n               or regular expression masks. Custom masks can reveal part     of the string value.\n            </p>\n         ","href":"datacollector\/UserGuide\/Processors\/FieldMasker.html#concept_hjc_t4k_wq","attributes": {"data-id":"concept_hjc_t4k_wq",},"menu": {"hasChildren":true,},"tocID":"concept_hjc_t4k_wq-d46e65385","next":"concept_hjc_t4k_wq-d46e65385",},{"title":"Field Merger","shortdesc":"\n            <p class=\"shortdesc\">The Field Merger merges one or more fields in a record to a different location in the   record. Use only for records with\n               a list or map structure. \n            </p>\n         ","href":"datacollector\/UserGuide\/Processors\/FieldMerger.html#concept_pgm_tsl_gt","attributes": {"data-id":"concept_pgm_tsl_gt",},"menu": {"hasChildren":true,},"tocID":"concept_pgm_tsl_gt-d46e65488","next":"concept_pgm_tsl_gt-d46e65488",},{"title":"Field Order","shortdesc":"\n            <p class=\"shortdesc\">The Field Order processor orders fields in a map or list-map field and outputs the         fields into a list-map or list\n               root field. \n            </p>\n         ","href":"datacollector\/UserGuide\/Processors\/FieldOrder.html#concept_krp_5fv_vy","attributes": {"data-id":"concept_krp_5fv_vy",},"menu": {"hasChildren":true,},"tocID":"concept_krp_5fv_vy-d46e65545","next":"concept_krp_5fv_vy-d46e65545",},{"title":"Field Pivoter","href":"datacollector\/UserGuide\/Processors\/ListPivoter.html#concept_ekg_313_qw","attributes": {"data-id":"concept_ekg_313_qw",},"menu": {"hasChildren":true,},"tocID":"concept_ekg_313_qw-d46e65647","next":"concept_ekg_313_qw-d46e65647",},{"title":"Field Remover","href":"datacollector\/UserGuide\/Processors\/FieldRemover.html#concept_jdd_blr_wq","attributes": {"data-id":"concept_jdd_blr_wq",},"menu": {"hasChildren":true,},"tocID":"concept_jdd_blr_wq-d46e65746","next":"concept_jdd_blr_wq-d46e65746",},{"title":"Field Renamer","shortdesc":"\n            <p class=\"shortdesc\">Use the Field Renamer to rename fields in a record. You can specify individual fields to         rename or use regular expressions\n               to rename sets of fields. \n            </p>\n         ","href":"datacollector\/UserGuide\/Processors\/FieldRenamer.html#concept_vyv_zsg_ht","attributes": {"data-id":"concept_vyv_zsg_ht",},"menu": {"hasChildren":true,},"tocID":"concept_vyv_zsg_ht-d46e65800","next":"concept_vyv_zsg_ht-d46e65800",},{"title":"Field Replacer","shortdesc":"\n            <p class=\"shortdesc\">The Field Replacer replaces values in fields with nulls or with new values. Use the         Field Replacer to update values\n               or to replace invalid values.\n            </p>\n         ","href":"datacollector\/UserGuide\/Processors\/FieldReplacer.html#concept_rw4_2d3_4cb","attributes": {"data-id":"concept_rw4_2d3_4cb",},"menu": {"hasChildren":true,},"tocID":"concept_rw4_2d3_4cb-d46e65905","next":"concept_rw4_2d3_4cb-d46e65905",},{"title":"Field Splitter","shortdesc":"\n            <p class=\"shortdesc\">The Field Splitter splits string data based on a regular expression and passes the   separated data to new fields. Use the\n               Field Splitter to split complex string values into logical   components. \n            </p>\n         ","href":"datacollector\/UserGuide\/Processors\/FieldSplitter.html#concept_vlj_vph_yq","attributes": {"data-id":"concept_vlj_vph_yq",},"menu": {"hasChildren":true,},"tocID":"concept_vlj_vph_yq-d46e66125","next":"concept_vlj_vph_yq-d46e66125",},{"title":"Field Type Converter","shortdesc":"\n            <p class=\"shortdesc\">The Field Type Converter converts the data types of fields to compatible data types. You     might use the Field Type Converter\n               to convert the data types of fields before performing     calculations. You can also use the Field Type Converter to change\n               the scale of decimal     data.\n            </p>\n         ","href":"datacollector\/UserGuide\/Processors\/FieldTypeConverter.html#concept_is3_zkp_wq","attributes": {"data-id":"concept_is3_zkp_wq",},"menu": {"hasChildren":true,},"tocID":"concept_is3_zkp_wq-d46e66339","next":"concept_is3_zkp_wq-d46e66339",},{"title":"Field Zip","href":"datacollector\/UserGuide\/Processors\/FieldZip.html#concept_o3b_t1k_yx","attributes": {"data-id":"concept_o3b_t1k_yx",},"menu": {"hasChildren":true,},"tocID":"concept_o3b_t1k_yx-d46e66496","next":"concept_o3b_t1k_yx-d46e66496",},{"title":"Geo IP","href":"datacollector\/UserGuide\/Processors\/GeoIP.html#concept_fch_fc3_ms","attributes": {"data-id":"concept_fch_fc3_ms",},"menu": {"hasChildren":true,},"tocID":"concept_fch_fc3_ms-d46e66706","next":"concept_fch_fc3_ms-d46e66706",},{"title":"Groovy Evaluator","href":"datacollector\/UserGuide\/Processors\/Groovy.html#concept_ldh_sct_gv","attributes": {"data-id":"concept_ldh_sct_gv",},"menu": {"hasChildren":true,},"tocID":"concept_ldh_sct_gv-d46e66988","next":"concept_ldh_sct_gv-d46e66988",},{"title":"HBase Lookup","shortdesc":"\n            <p class=\"shortdesc\">The HBase Lookup processor performs key-value lookups in HBase and passes the lookup         values to fields. Use the HBase\n               Lookup to enrich records with additional data.\n            </p>\n         ","href":"datacollector\/UserGuide\/Processors\/HBaseLookup.html#concept_mnj_zhq_bw","attributes": {"data-id":"concept_mnj_zhq_bw",},"menu": {"hasChildren":true,},"tocID":"concept_mnj_zhq_bw-d46e67928","next":"concept_mnj_zhq_bw-d46e67928",},{"title":"Hive Metadata","href":"datacollector\/UserGuide\/Processors\/HiveMetadata.html#concept_rz5_nft_zv","attributes": {"data-id":"concept_rz5_nft_zv",},"menu": {"hasChildren":true,},"tocID":"concept_rz5_nft_zv-d46e68312","next":"concept_rz5_nft_zv-d46e68312",},{"title":"HTTP Client","shortdesc":"\n            <p class=\"shortdesc\"></p>\n         ","href":"datacollector\/UserGuide\/Processors\/HTTPClient.html#concept_ghx_ypr_fw","attributes": {"data-id":"concept_ghx_ypr_fw",},"menu": {"hasChildren":true,},"tocID":"concept_ghx_ypr_fw-d46e69394","next":"concept_ghx_ypr_fw-d46e69394",},{"title":"JavaScript Evaluator","href":"datacollector\/UserGuide\/Processors\/JavaScript.html#concept_n2p_jgf_lr","attributes": {"data-id":"concept_n2p_jgf_lr",},"menu": {"hasChildren":true,},"tocID":"concept_n2p_jgf_lr-d46e70662","next":"concept_n2p_jgf_lr-d46e70662",},{"title":"JDBC Lookup","shortdesc":"\n            <p class=\"shortdesc\">The JDBC Lookup processor uses a JDBC connection to perform lookups in a database         table and pass the lookup values\n               to fields. Use the JDBC Lookup to enrich records with         additional data.\n            </p>\n         ","href":"datacollector\/UserGuide\/Processors\/JDBCLookup.html#concept_ysc_ccy_hw","attributes": {"data-id":"concept_ysc_ccy_hw",},"menu": {"hasChildren":true,},"tocID":"concept_ysc_ccy_hw-d46e71468","next":"concept_ysc_ccy_hw-d46e71468",},{"title":"JDBC Tee","href":"datacollector\/UserGuide\/Processors\/JDBCTee.html#concept_qbx_lcy_hw","attributes": {"data-id":"concept_qbx_lcy_hw",},"menu": {"hasChildren":true,},"tocID":"concept_qbx_lcy_hw-d46e71843","next":"concept_qbx_lcy_hw-d46e71843",},{"title":"JSON Generator","href":"datacollector\/UserGuide\/Processors\/JSONGenerator.html#concept_jmg_hw1_h1b","attributes": {"data-id":"concept_jmg_hw1_h1b",},"menu": {"hasChildren":true,},"tocID":"concept_jmg_hw1_h1b-d46e72053","next":"concept_jmg_hw1_h1b-d46e72053",},{"title":"JSON Parser","href":"datacollector\/UserGuide\/Processors\/JSONParser.html#concept_bs1_4t3_yq","attributes": {"data-id":"concept_bs1_4t3_yq",},"menu": {"hasChildren":true,},"tocID":"concept_bs1_4t3_yq-d46e72109","next":"concept_bs1_4t3_yq-d46e72109",},{"title":"Jython Evaluator","href":"datacollector\/UserGuide\/Processors\/Jython.html#concept_a1h_lkf_lr","attributes": {"data-id":"concept_a1h_lkf_lr",},"menu": {"hasChildren":true,},"tocID":"concept_a1h_lkf_lr-d46e72166","next":"concept_a1h_lkf_lr-d46e72166",},{"title":"Kudu Lookup","shortdesc":"\n            <p class=\"shortdesc\">The Kudu Lookup processor performs lookups in a Kudu table and passes the lookup         values to fields. Use the Kudu Lookup\n               to enrich records with additional data.\n            </p>\n         ","href":"datacollector\/UserGuide\/Processors\/KuduLookup.html#concept_a1x_3wl_p1b","attributes": {"data-id":"concept_a1x_3wl_p1b",},"menu": {"hasChildren":true,},"tocID":"concept_a1x_3wl_p1b-d46e72972","next":"concept_a1x_3wl_p1b-d46e72972",},{"title":"Log Parser","href":"datacollector\/UserGuide\/Processors\/LogParser.html#concept_ulm_qdq_fs","attributes": {"data-id":"concept_ulm_qdq_fs",},"menu": {"hasChildren":true,},"tocID":"concept_ulm_qdq_fs-d46e73340","next":"concept_ulm_qdq_fs-d46e73340",},{"title":"Postgres Metadata","href":"datacollector\/UserGuide\/Processors\/JDBCMetadata.html#concept_lcp_ssh_qcb","attributes": {"data-id":"concept_lcp_ssh_qcb",},"menu": {"hasChildren":true,},"tocID":"concept_lcp_ssh_qcb-d46e73440","next":"concept_lcp_ssh_qcb-d46e73440",},{"title":"Record Deduplicator","shortdesc":"\n            <p class=\"shortdesc\">The Record Deduplicator evaluates records for duplicate data and routes data to two         streams -  one for unique records\n               and one for duplicate records. Use the Record Deduplicator         to discard duplicate data or route duplicate data through\n               different processing logic. \n            </p>\n         ","href":"datacollector\/UserGuide\/Processors\/RDeduplicator.html#concept_z3m_v52_zq","attributes": {"data-id":"concept_z3m_v52_zq",},"menu": {"hasChildren":true,},"tocID":"concept_z3m_v52_zq-d46e73725","next":"concept_z3m_v52_zq-d46e73725",},{"title":"Redis Lookup","shortdesc":"\n            <p class=\"shortdesc\">The Redis Lookup processor performs key-value lookups in Redis and passes the lookup         values to fields. Use the Redis\n               Lookup to enrich records with additional data.\n            </p>\n         ","href":"datacollector\/UserGuide\/Processors\/RedisLookup.html#concept_ng3_lpr_pv","attributes": {"data-id":"concept_ng3_lpr_pv",},"menu": {"hasChildren":true,},"tocID":"concept_ng3_lpr_pv-d46e73827","next":"concept_ng3_lpr_pv-d46e73827",},{"title":"Salesforce Lookup","shortdesc":"\n            <p class=\"shortdesc\">The Salesforce Lookup processor performs lookups in a Salesforce object and passes         the lookup values to fields. Use\n               the Salesforce Lookup to enrich records with additional         data.\n            </p>\n         ","href":"datacollector\/UserGuide\/Processors\/SalesforceLookup.html#concept_k23_3rk_yx","attributes": {"data-id":"concept_k23_3rk_yx",},"menu": {"hasChildren":true,},"tocID":"concept_k23_3rk_yx-d46e73987","next":"concept_k23_3rk_yx-d46e73987",},{"title":"Schema Generator","href":"datacollector\/UserGuide\/Processors\/SchemaGenerator.html#concept_rfz_ks3_x1b","attributes": {"data-id":"concept_rfz_ks3_x1b",},"menu": {"hasChildren":true,},"tocID":"concept_rfz_ks3_x1b-d46e74276","next":"concept_rfz_ks3_x1b-d46e74276",},{"title":"Spark Evaluator","shortdesc":"\n            <p class=\"shortdesc\">The Spark Evaluator performs custom processing within a pipeline based on a Spark         application that you develop.</p>\n         ","href":"datacollector\/UserGuide\/Processors\/Spark.html#concept_cpx_1lm_zx","attributes": {"data-id":"concept_cpx_1lm_zx",},"menu": {"hasChildren":true,},"tocID":"concept_cpx_1lm_zx-d46e74486","next":"concept_cpx_1lm_zx-d46e74486",},{"title":"SQL Parser","shortdesc":"\n            <p class=\"shortdesc\"></p>\n         ","href":"datacollector\/UserGuide\/Processors\/SQLParser.html#concept_zh2_kfj_tdb","attributes": {"data-id":"concept_zh2_kfj_tdb",},"menu": {"hasChildren":true,},"tocID":"concept_zh2_kfj_tdb-d46e74867","next":"concept_zh2_kfj_tdb-d46e74867",},{"title":"Static Lookup","shortdesc":"\n            <p class=\"shortdesc\">The Static Lookup processor performs lookups of key-value pairs that are stored in local         memory and passes the lookup\n               values to fields. Use the Static Lookup to store String values         in memory that the pipeline can look up at runtime\n               to enrich records with additional         data.\n            </p>\n         ","href":"datacollector\/UserGuide\/Processors\/StaticLookup.html#concept_aqz_t4r_pv","attributes": {"data-id":"concept_aqz_t4r_pv",},"menu": {"hasChildren":true,},"tocID":"concept_aqz_t4r_pv-d46e75430","next":"concept_aqz_t4r_pv-d46e75430",},{"title":"Stream Selector","shortdesc":"\n            <p class=\"shortdesc\">The Stream Selector passes data to streams based on conditions. Define a condition for     each stream of data that you want\n               to create. The Stream Selector uses a default stream to pass     records that do not match user-defined conditions. \n            </p>\n         ","href":"datacollector\/UserGuide\/Processors\/StreamSelector.html#concept_tqv_t5r_wq","attributes": {"data-id":"concept_tqv_t5r_wq",},"menu": {"hasChildren":true,},"tocID":"concept_tqv_t5r_wq-d46e75490","next":"concept_tqv_t5r_wq-d46e75490",},{"title":"Value Replacer (Deprecated)","href":"datacollector\/UserGuide\/Processors\/ValueReplacer.html#concept_o5k_dmf_zq","attributes": {"data-id":"concept_o5k_dmf_zq",},"menu": {"hasChildren":true,},"tocID":"concept_o5k_dmf_zq-d46e75647","next":"concept_o5k_dmf_zq-d46e75647",},{"title":"XML Flattener","href":"datacollector\/UserGuide\/Processors\/XMLFlattener.html#concept_ck4_255_sv","attributes": {"data-id":"concept_ck4_255_sv",},"menu": {"hasChildren":true,},"tocID":"concept_ck4_255_sv-d46e75929","next":"concept_ck4_255_sv-d46e75929",},{"title":"XML Parser","href":"datacollector\/UserGuide\/Processors\/XMLParser.html#concept_dtt_q5q_k5","attributes": {"data-id":"concept_dtt_q5q_k5",},"menu": {"hasChildren":true,},"tocID":"concept_dtt_q5q_k5-d46e76029","next":"concept_dtt_q5q_k5-d46e76029",}]});