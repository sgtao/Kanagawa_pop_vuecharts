#!/usr/bin/env python
# -*- coding: utf-8 -*-
import pandas as pd
import sys
import os
#
def read_excel_file(input_file_name):
  # input_file_name = 'jinkotosetai_r3_8.xlsx'
  # df = pd.read_excel(input_file_name, index_col=0)
  # df = pd.read_excel(input_file_name)

  #xls book Open (xls, xlsxのどちらでも可能)
  input_book = pd.ExcelFile(input_file_name)
  #sheet_namesメソッドでExcelブック内の各シートの名前をリストで取得できる
  input_sheet_name = input_book.sheet_names
  #lenでシートの総数を確認
  num_sheet = len(input_sheet_name)
  #シートの数とシートの名前のリストの表示
  print("Sheet の数:", num_sheet)
  print(input_sheet_name)
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
