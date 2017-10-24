import dash
import dash_core_components as dcc
import dash_html_components as html
import xml.etree.ElementTree as ET
import pandas as pd
import numpy as np
import cufflinks as cf

xml_data = open('testwaits.xml').read()

def xml2df(xml_data):
    root = ET.XML(xml_data)
    all_records = []
    for i, child in enumerate(root):
        record = {}
        for subchild in child:
            record[subchild.tag] = subchild.text
            all_records.append(record)
    return pd.DataFrame(all_records)

cf.set_config_file(offline=False, world_readable=True, theme='ggplot')

df = xml2df(xml_data)
df.head()
df.iplot(kind='line')
