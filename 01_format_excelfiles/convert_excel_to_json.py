#!/usr/bin/env python
# -*- coding: utf-8 -*-
import pandas as pd
import sys
import os
import json
from pathlib import Path
from urllib.parse import urlparse
#
rename_table_file = Path(__file__).parent/'assets/jititai_code.csv'
rename_table = []
#
# make object from row data
def make_obj(id, city_name, code, row):
  _obj = {
    'id' : id,
    'city_name': city_name,
    'code' : code,
    'household' : row[4],
    'population' : row[5],
    'pop_male' : row[6],
    'pop_female' : row[7],
    'change_pop' : row[8],
    'change_nature' : row[9],
    'change_social' : row[10],
    'pop_per_house' : row[11],
    'pop_per_area' : row[12],
  }
  return _obj
#
#
#
def check_in_list(name, rename_table):
  if not type(name) is str:
    return False
  else:
    _replace_name = name
    for _rename_entry in rename_table.name_in_sheet:
      # print(_rename_entry)
      if _replace_name in _rename_entry:
        return True
    else:
      return False
#
def get_child_fr_list(name, rename_table):
  for i in range(len(rename_table)):
    # print(rename_table.iloc[i].name_in_sheet)
    _check_word = rename_table.iloc[i].name_in_sheet
    if (name in _check_word):
      return {'code': rename_table.iloc[i].code, 'city_name': rename_table.iloc[i].city_name}
  return None

# convert dataframe to object
def sheet_to_object(input_sheet_df):
  _df = input_sheet_df
  _population_array = []
  df_rename_table = pd.read_csv(rename_table_file)
  #
  _id = 0;
  for index, row in _df.iterrows():
      _flg_exist = check_in_list(row[2], df_rename_table)
      # print(_flg_exist)
      if _flg_exist:
        _childs = get_child_fr_list(row[2], df_rename_table)
        # print(_childs)
        _code = _childs['code']
        _city_name = _childs['city_name']
        _population_array.append(make_obj(_id, _city_name, _code, row))
        _id += 1
  #
  # print(_population_array)
  return _population_array
#
#
# print Data Sheet
def print_data_sheet(input_sheet_df):
  #DataFrameとしてsheet1枚のデータ(2019)を読込み
  #読み込んだシートの先頭10行を表示
  # 行ごとに処理
  for i, row in input_sheet_df.iterrows():
      print(i, row)
  # # 列ごとに処理
  # for i, col in input_sheet_df.iteritems():
  #     print(i, col)
#
#
# read excel file
def read_excel_file(input_file_name):
  #xls book Open (xls, xlsxのどちらでも可能)
  input_book = pd.ExcelFile(input_file_name)
  #sheet_namesメソッドでExcelブック内の各シートの名前をリストで取得できる
  input_sheet_name = input_book.sheet_names
  #DataFrameとしてsheet1枚を読込み
  input_sheet_df = input_book.parse(input_sheet_name[0], header=None)
  # # 読み込んだシートの表示
  # print_data_sheet(input_sheet_df)
  # データフレームの処理
  _population_array = sheet_to_object(input_sheet_df)
  # print(_population_array)        
  return _population_array
#
#
# json_make
def json_make(path: Path, obj: dict) -> None:
    ls = None
    #
    if not os.path.exists(path):
      f = open(path, 'w')
      f.write('')  # 何も書き込まなくてファイルは作成されました
      f.close()    
    #
    with open(path, 'r+') as f:
        ls = f.readlines()
        if ls == []:
            ls.append('[\n')
        if ls[-1] == ']':
            ls[-1] = ','
        ls.insert(len(ls), f'{json.dumps(obj, indent=4 ,ensure_ascii=False)}')
        ls.insert(len(ls), '\n]')
    #
    with open(path, 'w') as f:
        f.writelines(ls)
#
#
# main routine
def main(input_file_name, output_file):
  population_array = read_excel_file(input_file_name)
  # print(population_array)
  path = Path(__file__).parent/output_file
  print('output to',path)
  json_make(path, population_array)
# 
# 
# 
if __name__ == '__main__':
    args = sys.argv
    output_file = 'tmp.json'
    if 2 <= len(args):
      filepath = args[1]
      if 3 <= len(args):
        output_file = args[2]
    else:
      print('Arguments are too short')

    if os.path.exists(filepath) or len(urlparse(filepath).scheme) > 0:
      main(filepath, output_file)
    else:
      print('file {} is not found'.format(filepath))
  #
# 
# EOF
