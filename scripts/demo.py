
import sys
import pickle
import sklearn
import json



filename = 'Sociothon-Hackathon-2021/scripts/firstmodel.sav'

loaded_model = pickle.load(open(filename, 'rb'))
# Takes first name and last name via command 
# line arguments and then display them
def output(val):
    
    out =  loaded_model.predict([[val]])
    return out

print(json.dumps(str(output(int(sys.argv[1])))))

# send_message_back = {
#   'arguments': output(int(sys.argv[1:])) 
  
# }
# print(json.dumps(send_message_back))