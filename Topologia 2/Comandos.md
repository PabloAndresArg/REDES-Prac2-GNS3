
# Práctica 2: Protocolos VTP & STP (Topología 2)


## Información General
- SO: Windows 10
- software: GNS3 & VMWare
#

## **Comandos para configurar SW1**


- Portchannel 1
##
    > configure terminal
    > interface range f1/11 - 12
    > channel-group 1 mode on
    > exit

- Portchannel 2
##
    > configure terminal
    > interface range f1/0 - 2
    > channel-group 2 mode on
    > exit

- Portchannel 3
##
    > configure terminal
    > interface range f1/3 - 5
    > channel-group 3 mode on
    > exit

- Configurar VTP
##
    > configure terminal
    > vtp domain Grupo22
    > vtp password Grupo22
    > vtp mode server
    > end

- Crear VLANs
##
    > configure terminal
    > vlan 10
    > name ADMINISTRACION
    > exit
    > vlan 20
    > name CONTABILIDAD
    > exit
    > vlan 30
    > name VENTAS-INFORMATICA
    > end

- Configurando enlaces truncales
##
    > configure terminal
    > interface Po1
    > switchport mode trunk
    > switchport trunk allowed vlan 1,10,20,30,1002-1005
    > exit
    > interface Po2
    > switchport mode trunk
    > switchport trunk allowed vlan 1,10,20,30,1002-1005
    > exit
    > interface Po3
    > switchport mode trunk
    > switchport trunk allowed vlan 1,10,20,30,1002-1005
    > end

- Configuracion STP
##
    > configure terminal
    > spanning-tree vlan 10 root primary
    > spanning-tree vlan 20 root primary
    > spanning-tree vlan 30 root primary
    > end
    > sh spanning-tree root

- Guardar configuración
##
    > copy running-config startup-config

## **Comandos para configurar SW2**

- Portchannel 1
##
    > configure terminal
    > interface range f1/11 - 12
    > channel-group 1 mode on
    > exit

- Portchannel 4
##
    > configure terminal
    > interface range f1/3 - 5
    > channel-group 4 mode on
    > exit

- Portchannel 5
##
    > configure terminal
    > interface range f1/6 - 8
    > channel-group 5 mode on
    > end

- Configurar VTP
##
    > configure terminal
    > vtp domain Grupo22
    > vtp password Grupo22
    > vtp mode client
    > end

- Configurando enlaces truncales
##
    > configure terminal
    > interface Po1
    > switchport mode trunk
    > switchport trunk allowed vlan 1,10,20,30,1002-1005
    > exit
    > interface Po4
    > switchport mode trunk
    > switchport trunk allowed vlan 1,10,20,30,1002-1005
    > exit
    > interface Po5
    > switchport mode trunk
    > switchport trunk allowed vlan 1,10,20,30,1002-1005
    > end

- Guardar configuración
##
    > copy running-config startup-config

## **Comandos para configurar SW3**

- Portchannel 2
##
    > configure terminal
    > interface range f1/0 - 2
    > channel-group 2 mode on
    > exit

- Portchannel 4
##
    > configure terminal
    > interface range f1/3 - 5
    > channel-group 4 mode on
    > end

- Configurar VTP
##
    > configure terminal
    > vtp domain Grupo22
    > vtp password Grupo22
    > vtp mode client
    > end

- Configurando enlaces truncales
##
    > configure terminal
    > interface Po2
    > switchport mode trunk
    > switchport trunk allowed vlan 1,10,20,30,1002-1005
    > exit
    > interface Po4
    > switchport mode trunk
    > switchport trunk allowed vlan 1,10,20,30,1002-1005
    > end

- Guardar configuración
##
    > copy running-config startup-config

## **Comandos para configurar SW4**

- Portchannel 3
##
    > configure terminal
    > interface range f1/3 - 5
    > channel-group 3 mode on
    > exit

- Portchannel 5
##
    > configure terminal
    > interface range f1/6 - 8
    > channel-group 5 mode on
    > end

- Configurar VTP
##
    > configure terminal
    > vtp domain Grupo22
    > vtp password Grupo22
    > vtp mode client
    > end

- Configurando enlaces truncales
##
    > configure terminal
    > interface Po3
    > switchport mode trunk
    > switchport trunk allowed vlan 1,10,20,30,1002-1005
    > exit
    > interface Po5
    > switchport mode trunk
    > switchport trunk allowed vlan 1,10,20,30,1002-1005
    > end

- Guardar configuración
##
    > copy running-config startup-config
