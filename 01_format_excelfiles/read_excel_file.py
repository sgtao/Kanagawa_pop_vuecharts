#!/usr/bin/env python
# -*- coding: utf-8 -*-
import pandas as pd
import sys
import os
#
#
# print Data Sheet


def print_data_sheet(input_sheet_df):
  #DataFrameとしてsheet1枚のデータ(2019)を読込み
  #読み込んだシートの先頭10行を表示
  # print(vars(input_sheet_df))
  # input_sheet_df.head(10)
  # print(vars(input_sheet_df.head(10)))
  # 行ごとに処理
  for i, row in input_sheet_df.iterrows():
      print(i, row)


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
  # 読み込んだシートの表示
  print_data_sheet(input_sheet_df)
#
# main routine
if __name__ == '__main__':
    args = sys.argv
    if 2 <= len(args):
      filename = args[1]
      if os.path.exists(filename):
        input_book = read_excel_file(filename)
      else:
        print('file {} is not found'.format(filename))
    else:
      print('Arguments are too short')
  #

# EOF
