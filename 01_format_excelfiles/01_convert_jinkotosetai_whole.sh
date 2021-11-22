#!/bin/sh
# convert_jinkoutosetai_whole.sh
# 
# check environments
if `test -f convert_excel_to_json.py`; then
  echo "ok. do convert whole";
else
 echo "ng. exec this script under 01_format" ;
 exit 1;
fi
#
# cleanup outputs folder
rm outputs/*
#
# reference data of「神奈川県人口統計調査（月報）」
base_url='https://www.pref.kanagawa.jp/documents/14449/'
base_out='outputs/'
conv_jinkotosetai(){
  input_path=$base_url$1 
  output_path=$base_out$2
  # echo "python3 convert_excel_to_json.py $input_path $output_path;"
  python3 convert_excel_to_json.py $input_path $output_path;
  sleep 3;
}
#
# convert between 2019.{01-12}
conv_jinkotosetai jinkotosetai190101.xlsx  jinkotosetai_201901.json
conv_jinkotosetai jinkotosetai190201.xlsx  jinkotosetai_201902.json
conv_jinkotosetai jinkotosetai190301.xlsx  jinkotosetai_201903.json
conv_jinkotosetai jinkotosetai190401.xlsx  jinkotosetai_201904.json
conv_jinkotosetai jinkotosetai190501.xlsx  jinkotosetai_201905.json
conv_jinkotosetai jinkotosetai190601.xlsx  jinkotosetai_201906.json
conv_jinkotosetai jinkotosetai190701.xlsx  jinkotosetai_201907.json
conv_jinkotosetai jinkotosetai190801.xlsx  jinkotosetai_201908.json
conv_jinkotosetai jinkotosetai1909.xlsx  jinkotosetai_201909.json
conv_jinkotosetai jinkotosetai1910.xlsx  jinkotosetai_201910.json
conv_jinkotosetai jinkotosetai1911.xlsx  jinkotosetai_201911.json
conv_jinkotosetai jinkotosetai1912.xlsx  jinkotosetai_201912.json
# convert between 2020.{01-12}
conv_jinkotosetai jinkotosetai2001.xlsx  jinkotosetai_202001.json
conv_jinkotosetai jinkotosetai2002.xlsx  jinkotosetai_202002.json
conv_jinkotosetai jinkotosetai2003.xlsx  jinkotosetai_202003.json
conv_jinkotosetai jinkotosetai2004.xlsx  jinkotosetai_202004.json
conv_jinkotosetai jinkotosetai2005.xlsx  jinkotosetai_202005.json
conv_jinkotosetai jinkotosetai2006.xlsx  jinkotosetai_202006.json
conv_jinkotosetai jinkotosetai2007.xlsx  jinkotosetai_202007.json
conv_jinkotosetai jinkotosetai2008.xlsx  jinkotosetai_202008.json
conv_jinkotosetai jinkotosetai2009.xlsx  jinkotosetai_202009.json
conv_jinkotosetai jinkotosetai_r2_10.xlsx  jinkotosetai_202010.json
conv_jinkotosetai jinkotosetai_r2_11.xlsx  jinkotosetai_202011.json
conv_jinkotosetai jinkotosetai_r2_12.xlsx  jinkotosetai_202012.json
# convert between 2021.{01-09}
conv_jinkotosetai jinkotosetai_r3_1.xlsx  jinkotosetai_202101.json
conv_jinkotosetai jinkotosetai_r3_2.xlsx  jinkotosetai_202102.json
conv_jinkotosetai jinkotosetai_r3_3.xlsx  jinkotosetai_202103.json
conv_jinkotosetai jinkotosetai_r3_4.xlsx  jinkotosetai_202104.json
conv_jinkotosetai jinkotosetai_r3_5.xlsx  jinkotosetai_202105.json
conv_jinkotosetai jinkotosetai_r3_6.xlsx  jinkotosetai_202106.json
conv_jinkotosetai jinkotosetai_r3_7.xlsx  jinkotosetai_202107.json
conv_jinkotosetai jinkotosetai_r3_8.xlsx  jinkotosetai_202108.json
conv_jinkotosetai jinkotosetai_r3_9.xlsx  jinkotosetai_202109.json
conv_jinkotosetai jinkotosetai_r3_10.xlsx  jinkotosetai_202110.json

