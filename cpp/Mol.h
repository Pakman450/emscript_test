#ifndef MOL_H
#define MOL_H
#include <string>


std::string returnMolString();
int returnMolInt();

class           Mol {
    public:
        unsigned int            num_atoms;
        unsigned int            num_bonds;
};
#endif