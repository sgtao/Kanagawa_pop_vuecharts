# kanagawa_poplation_info
- charts_Kanagawa_popをJSONデータの読込で実現する
  1. 神奈川県の公表データからJSONデータへ変換する
  2. charts.jsを利用して、JSONデータを可視化する

## Demo
- [(trial)show information as simple list](02_trial_get_jsonfile/index.html)

## prepare
- prepare to work under `01_format_excelfiles/`
```
pip3 install pandas
pip3 install openpyxl
pip3 install xlrd==1.2.0
```

##  convert Excel file to JSON file
```
cd 01_format_excelfiles
rm outputs/jinkotosetai_202108.json
wget https://www.pref.kanagawa.jp/documents/14449/jinkotosetai_r3_8.xlsx
python3 convert_excel_to_json.py ./jinkotosetai_r3_8.xlsx
 outputs/jinkotosetai_202108.json
```

## 参考情報：
  - [神奈川県の人口と世帯](https://www.pref.kanagawa.jp/docs/x6z/tc30/jinko/jimkotosetai.html)
  - refer DATAM STUDIO : [Excel ファイルをPythonで読み込んで整理されたデータフレームにする](https://datumstudio.jp/blog/1722/)
  - refer へっぽこCTOブログ: https://heppoco-cto.com/pandasxlrd%E3%81%A7xlsx%E3%82%92%E9%96%8B%E3%81%93%E3%81%86%E3%81%A8%E3%81%99%E3%82%8B%E3%81%A8xlrd-biffh-xlrderror-excel-xlsx-file-not-supported%E3%81%AE%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%8C/468/
  - refer Qiita : https://qiita.com/t4t5u0/items/530d3eb7453aa8ad8abf



