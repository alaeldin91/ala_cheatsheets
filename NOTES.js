// Building Pages Structures (vue)
// Vuetify Grid System Rule: Containers => Rows => Columns => Contents
<template>
    <div class="wrapper">
        <v-container fluid>
            <v-row class="wrapper-row">
                <v-col cols="12" class="section">
                    <v-container class="content-container"> {/* it maybe fluid or not depend on the design */}
                        <v-row class="section_name">
                            {/* do what ever u want here.. */}
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>








































// # Responsive Design :
// Media Queries :-

// Small devices (landscape phones, 576px and above till next break point)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and above till next break point)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and above till next break point)
@media (min-width: 992px) { ... }






