# prometheus-otiohome-exporter

this exporter exposes prometheus metrics from the information collected in the otiohome endpoints


[![Docker Image CI](https://github.com/sguesdon/prometheus-otiohome-exporter/actions/workflows/tag_build_docker_image.yml/badge.svg)](https://github.com/sguesdon/prometheus-otiohome-exporter/actions/workflows/tag_build_docker_image.yml)

## env variables

| Name               | Default Value |
|--------------------|---------------|
| OTIO_ACCESS_TOKEN  | -             |
| OTIO_REFRESH_TOKEN | -             |
| OTIO_PLACE_ID      | -             |
| OTIO_HOST          | -             |
| OTIO_CLIENT_ID     | -             |
| OTIO_OPENID_HOST   | -             |
| NODE_ENV           | production    |
| NODE_PORT          | 9100          |

## endpoints

| Method | URI      | Code Status |
|--------|----------|-------------|
| GET    | /health  | 203         |
| GET    | /metrics | 200         |

## metrics

```
# HELP passerelle_enableled enableLed of Passerelle
# TYPE passerelle_enableled gauge
passerelle_enableled{name="Passerelle",id="xxxxxxxxxxxx"} 0

# HELP passerelle_online online of Passerelle
# TYPE passerelle_online gauge
passerelle_online{name="Passerelle",id="xxxxxxxxxxxx"} 1

# HELP passerelle_keepalive keepAlive of Passerelle
# TYPE passerelle_keepalive gauge
passerelle_keepalive{name="Passerelle",id="xxxxxxxxxxxx"} 1

# HELP thermometre_salon_online online of Thermomètre Salon
# TYPE thermometre_salon_online gauge
thermometre_salon_online{name="Thermomètre Salon",id="xxxxxxxxxxxx"} 1

# HELP thermometre_salon_temp temp of Thermomètre Salon
# TYPE thermometre_salon_temp gauge
thermometre_salon_temp{name="Thermomètre Salon",id="xxxxxxxxxxxx"} 18.8

# HELP thermometre_salon_humidity humidity of Thermomètre Salon
# TYPE thermometre_salon_humidity gauge
thermometre_salon_humidity{name="Thermomètre Salon",id="xxxxxxxxxxxx"} 55

# HELP thermometre_salon_batterylevel batterylevel of Thermomètre Salon
# TYPE thermometre_salon_batterylevel gauge
thermometre_salon_batterylevel{name="Thermomètre Salon",id="xxxxxxxxxxxx"} 100

# HELP thermometre_parents_online online of Thermomètre Parents
# TYPE thermometre_parents_online gauge
thermometre_parents_online{name="Thermomètre Parents",id="xxxxxxxxxxxx"} 1

# HELP thermometre_parents_temp temp of Thermomètre Parents
# TYPE thermometre_parents_temp gauge
thermometre_parents_temp{name="Thermomètre Parents",id="xxxxxxxxxxxx"} 18.1

# HELP thermometre_parents_humidity humidity of Thermomètre Parents
# TYPE thermometre_parents_humidity gauge
thermometre_parents_humidity{name="Thermomètre Parents",id="xxxxxxxxxxxx"} 56

# HELP thermometre_parents_batterylevel batterylevel of Thermomètre Parents
# TYPE thermometre_parents_batterylevel gauge
thermometre_parents_batterylevel{name="Thermomètre Parents",id="xxxxxxxxxxxx"} 100

# HELP thermometre_enfant_online online of Thermomètre enfant
# TYPE thermometre_enfant_online gauge
thermometre_enfant_online{name="Thermomètre enfant",id="xxxxxxxxxxxx"} 1

# HELP thermometre_enfant_temp temp of Thermomètre enfant
# TYPE thermometre_enfant_temp gauge
thermometre_enfant_temp{name="Thermomètre enfant",id="xxxxxxxxxxxx"} 18.8

# HELP thermometre_enfant_humidity humidity of Thermomètre enfant
# TYPE thermometre_enfant_humidity gauge
thermometre_enfant_humidity{name="Thermomètre enfant",id="xxxxxxxxxxxx"} 53

# HELP thermometre_enfant_batterylevel batterylevel of Thermomètre enfant
# TYPE thermometre_enfant_batterylevel gauge
thermometre_enfant_batterylevel{name="Thermomètre enfant",id="xxxxxxxxxxxx"} 100

# HELP thermometre_salle_de_bain_online online of Thermomètre  Salle de bain
# TYPE thermometre_salle_de_bain_online gauge
thermometre_salle_de_bain_online{name="Thermomètre  Salle de bain",id="xxxxxxxxxxxx"} 1

# HELP thermometre_salle_de_bain_temp temp of Thermomètre  Salle de bain
# TYPE thermometre_salle_de_bain_temp gauge
thermometre_salle_de_bain_temp{name="Thermomètre  Salle de bain",id="xxxxxxxxxxxx"} 19.7

# HELP thermometre_salle_de_bain_humidity humidity of Thermomètre  Salle de bain
# TYPE thermometre_salle_de_bain_humidity gauge
thermometre_salle_de_bain_humidity{name="Thermomètre  Salle de bain",id="xxxxxxxxxxxx"} 50

# HELP thermometre_salle_de_bain_batterylevel batterylevel of Thermomètre  Salle de bain
# TYPE thermometre_salle_de_bain_batterylevel gauge
thermometre_salle_de_bain_batterylevel{name="Thermomètre  Salle de bain",id="xxxxxxxxxxxx"} 100

# HELP radiateur_salle_de_bain_online online of Radiateur Salle de bain
# TYPE radiateur_salle_de_bain_online gauge
radiateur_salle_de_bain_online{name="Radiateur Salle de bain",id="xxxxxxxxxxxx"} 1

# HELP radiateur_salle_de_bain_onoff onoff of Radiateur Salle de bain
# TYPE radiateur_salle_de_bain_onoff gauge
radiateur_salle_de_bain_onoff{name="Radiateur Salle de bain",id="xxxxxxxxxxxx"} 0

# HELP chauffage_salon_online online of Chauffage salon
# TYPE chauffage_salon_online gauge
chauffage_salon_online{name="Chauffage salon",id="xxxxxxxxxxxx"} 1

# HELP chauffage_salon_onoff onoff of Chauffage salon
# TYPE chauffage_salon_onoff gauge
chauffage_salon_onoff{name="Chauffage salon",id="xxxxxxxxxxxx"} 0

# HELP chauffage_chambre_enfant_online online of Chauffage chambre enfant
# TYPE chauffage_chambre_enfant_online gauge
chauffage_chambre_enfant_online{name="Chauffage chambre enfant",id="xxxxxxxxxxxx"} 1

# HELP chauffage_chambre_enfant_onoff onoff of Chauffage chambre enfant
# TYPE chauffage_chambre_enfant_onoff gauge
chauffage_chambre_enfant_onoff{name="Chauffage chambre enfant",id="xxxxxxxxxxxx"} 0

# HELP chauffage_chambre_parentale_online online of Chauffage chambre parentale
# TYPE chauffage_chambre_parentale_online gauge
chauffage_chambre_parentale_online{name="Chauffage chambre parentale",id="xxxxxxxxxxxx"} 1

# HELP chauffage_chambre_parentale_onoff onoff of Chauffage chambre parentale
# TYPE chauffage_chambre_parentale_onoff gauge
chauffage_chambre_parentale_onoff{name="Chauffage chambre parentale",id="xxxxxxxxxxxx"} 0
```
