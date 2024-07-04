#include "Mol.h"
#include <string>


std::string returnMolString(){

    return "Hello from returnMolString";
}

Mol::Mol(unsigned int a, unsigned int b){

        num_atoms = a;
        num_bonds = b;
}

int returnMolInt(){
    Mol mol(25,25);
    // mol.num_atoms = 70;
    // mol.num_bonds = 100;

    return mol.num_atoms;
}


Mol returnMolObj(){
    Mol mol(199,525);
    // mol.num_atoms = 70;
    // mol.num_bonds = 100;

    return mol;
}