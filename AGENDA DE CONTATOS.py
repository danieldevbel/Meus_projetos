from time import sleep
from operator import itemgetter

agenda = []
contato = {}
menu =""
opcao = ""

def buscarContato(agenda, busca):
    """
    -> Função apara buscar um contato na agenda pelo nome, telefone ou email.
    :param 1: Lista de dicionários que representam os contatos na agenda.
    :param 2: busca pelo nome, telefone e email.
    :return: dicionario com informaçoes do contato.

    """
    encontrado = False
    for contato in agenda:
        if contato['Nome'] == busca or contato["Telefone"] == busca or contato["Email"] == busca:
            print("-" * 30)
            print('     Contato encontrado!')
            for k , v in contato.items():
                print(f'{k}: {v}')
            print("-" * 30)
            sleep(1)   

            encontrado = True    
            return contato
        
    if not encontrado:
        print("-" * 30)
        print('Contato não encontrado na agenda.')
        print("-" * 30)
        sleep(1)

def editar_contato(agenda, busca):
    """
    -> Função apara buscar um contato na agenda e editar qualquer um dos dados.
    :param 1: Lista de dicionários que representam os contatos na agenda.
    :param 2: busca pelo nome, telefone e email.
    
    """
    encontrado = False
    for contato in agenda:
        if contato['Nome'] == busca or contato["Telefone"] == busca or contato["Email"] == busca:
            while True:
                print("-" * 30)
                print('Contato encontrado!')
                for k , v in contato.items():
                    print(f'{k}: {v}')
                sleep(1)
                print("-" * 30)    
                print("Escolha uma opção:")
                print("1- Editar nome")
                print("2- Editar telefone")
                print("3- Editar email")
                print("4- Sair")
                opcao = input("Digite o número da opção desejada: ")

                if opcao == "1":
                    novo_nome = input('Digite o novo nome: ')
                    contato['Nome'] = novo_nome
                    print("-" * 30)
                    print('  Nome alterado com sucesso!')
                    print("-" * 30)
                    sleep(1)
                elif opcao == "2":
                    novo_telefone = input('Digite o novo telefone: ')
                    contato['Telefone'] = novo_telefone
                    print("-" * 32)
                    print('Telefone atualizado com sucesso!')
                    print("-" * 32)
                    sleep(1)
                elif opcao == "3":
                    novo_email = input('Digite o novo email: ')
                    contato['Email'] = novo_email
                    print("-" * 30)
                    print('Email atualizado com sucesso!')
                    print("-" * 30)
                    sleep(1)
                elif opcao == "4":
                    break
                else:
                    print("-" * 30)
                    print('Opção inválida.')
                    print("-" * 30)

                encontrado = True
                
    if not encontrado:
        print("-" * 36)
        print('  Contato não encontrado na agenda.')
        print("-" * 36)
        sleep(1)


#menu de opções 

while menu != "6" :
    print("-" * 70)
    print("Olá, bem vindo a sua agenda! Por favor insira uma das opções abaixo: \n 1-Adicionar novo contato \n 2-Buscar um contato \n 3-Editar um contato \n 4-Excluir um contato \n 5-Listar todos os contatos \n 6-Sair ")
    print("-" * 70)
    menu = input('  ')

#adicionando os contatos 

    if menu == "1":
        contato.clear()
        print("-" * 36)
        print('Insira a seguir os dados do contato:')
        contato['Nome'] = input('Nome: ')
        contato['Telefone'] = input('Telefone: ')
        contato['Email'] = input('Email: ')
        agenda.append(contato.copy())
        print("-" * 31)
        print('  Contato inserido na agenda!')
        print("-" * 31)
        sleep(1)

#buscando o contato 

    elif menu == "2":
        busca = input('Insira o nome, telefone ou email do contato a buscar na agenda: ')
        buscarContato(agenda, busca)
                     
#editando um contato

    elif menu == "3":
        busca = input('Digite o nome, telefone ou email do contato que deseja editar: ')
        editar_contato(agenda, busca)
        
#excluindo um contato

    elif menu == "4":
        busca = input('Insira o nome, telefone ou email do contato a excluir da agenda: ')
        contato_encotrado = buscarContato(agenda, busca)    
        opcao_3 = input('Tem certeza que deseja excluir esse contato? \n 1-SIM \n 2-NÃO \n   ')

        if opcao_3 == "1":
            agenda.remove(contato_encotrado)
            print("-" * 22)
            print("  Contato excluido!")
            print("-" * 22)
            sleep(1)      
        
#listar todos os contatos

    elif menu == "5":
        print("-" * 30)
        newlist = sorted(agenda, key=itemgetter('Nome'))
        for contato in newlist:
            print("-" * 30)
            for k, v in contato.items():
                print(f'{k}: {v}')
                sleep(0.5)
        
