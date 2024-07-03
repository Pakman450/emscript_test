#include <emscripten/bind.h>
#include <vector>
#include <string>
#include "readMol2.h"
#include "Mol.h"


std::vector<int> getVector() {
    std::vector<int> vec = {1, 2, 3, 4, 5, 10, 123};
    return vec;
}

std::string getStr() {
    return returnString();
}

std::string getMolStr() {
    return returnMolString();
}


int getMolInt() {
    return returnMolInt();
}


std::string readFile(const std::string& content){


    return "readFile";
}

Mol returnObj(){

    return returnMolObj();
}



EMSCRIPTEN_BINDINGS(my_module) {
    
    emscripten::function("getVector", &getVector);
    emscripten::function("getStr", &getStr);
    emscripten::function("getMolStr", &getMolStr);
    emscripten::function("getMolInt", &getMolInt);

    
    emscripten::function("returnObj", &returnObj);

    
    // You have to register the std::vector that contains a vector of integers
    emscripten::register_vector<int>("vector<int>");

    // Mol class
    emscripten::class_<Mol>("Mol")
        .constructor<int,int>()
        .property("num_atoms",&Mol::num_atoms)
        .property("num_bonds",&Mol::num_bonds);

}