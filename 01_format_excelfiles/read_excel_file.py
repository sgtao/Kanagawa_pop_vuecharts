#!/usr/bin/env python
# -*- coding: utf-8 -*-
import pandas as pd
import sys
import os
#
#
# make object from row data
def make_obj(row):
  _obj = {
    'name' : row[2],
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
# convert dataframe to object
def sheet_to_object(input_sheet_df):
  _df = input_sheet_df
  _population_array = []
  # print(population_array)        
  # print(_df)
  # print(_df.isnull())
  # print(_df.isnull().all())
  # print(_df[2])
  #
  for index, row in _df.iterrows():
      _row_null = row.isnull()
      if not _row_null[2]:
        # print(make_obj(row))
        _population_array.append(make_obj(row))
        # #
        # print(type(row))
        # print(row)
        # print('------')
  #
  return _population_array
  # print(population_array)        
  #
  # for index, row in _df.iterrows():
  #     print(type(index))
  #     print(index)
  #     print('~~~~~~')
  #     #
  #     print(type(row))
  #     print(row)
  #     print('------')
  #     #
  #     print(row[2])
  #     print('======\n')
  # #
#
#
# print Data Sheet
def print_data_sheet(input_sheet_df):
  #DataFrameとしてsheet1枚のデータ(2019)を読込み
  #読み込んだシートの先頭10行を表示
  # print(vars(input_sheet_df))
  # input_sheet_df.head(10)
  # print(input_sheet_df)
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
  # input_file_name = 'jinkotosetai_r3_8.xlsx'
  # df = pd.read_excel(input_file_name, index_col=0)
  # df = pd.read_excel(input_file_name)

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


#
# main routine
def main(input_file_name):
  population_array = read_excel_file(input_file_name)
  print(population_array)
# 
# 
# 
if __name__ == '__main__':
    args = sys.argv
    if 2 <= len(args):
      filename = args[1]
      if os.path.exists(filename):
        input_book = main(filename)
      else:
        print('file {} is not found'.format(filename))
    else:
      print('Arguments are too short')
  #

# EOF
