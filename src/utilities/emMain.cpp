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



EMSCRIPTEN_BINDINGS(my_module) {
    
    emscripten::function("getVector", &getVector);
    emscripten::function("getStr", &getStr);
    emscripten::function("getMolStr", &getMolStr);
    emscripten::function("getMolInt", &getMolInt);

    
    // You have to register the std::vector that contains a vector of integers
    emscripten::register_vector<int>("vector<int>");
}