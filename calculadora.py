suma = 0
resta = 0
multi = 0
div = 0
numero = 0
opcion = ""
operacion = ""
total= 0

operacion = input("Terminar operacion: ")

while(opcion != "="):
    numero = int(input("Ingresar numero: "))
    opcion = input("Ingresar opcion: ")
    if(opcion=="+"):
        print(str(total) + " + " + str(numero))
        total = total + numero
        print (str(total) + "\n")
    elif(opcion == "-"):
        print(str(total) + " - " + str(numero))
        total = total - numero        
        print (str(total) + "\n")
    elif(opcion=="*"):
        print(str(total) + " * " + str(numero))
        total = total * numero
        print(str(total + "\n"))
    elif(opcion=="/"):
        print(str(total) + " / " + str(numero))
        total = total / numero
        print (str(total) + "\n")
    else:
        print("Argumento invalido")
    
    operacion = input("Realizar operacion: ")

print("El total es: " + str(total))



