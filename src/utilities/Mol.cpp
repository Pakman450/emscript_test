#include "Mol.h"
#include <string>


std::string returnMolString(){

    return "Hello from returnMolString";
}


int returnMolInt(){
    Mol mol = {};
    mol.num_atoms = 70;
    mol.num_bonds = 100;

    return mol.num_atoms;
}