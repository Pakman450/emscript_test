#ifndef MOL_H
#define MOL_H
#include <string>




class           Mol {
    public:
        unsigned int            num_atoms;
        unsigned int            num_bonds;


    Mol(unsigned int , unsigned int);
};

std::string returnMolString();
int returnMolInt();
Mol returnMolObj();


#endif