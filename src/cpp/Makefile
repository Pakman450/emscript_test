# List of source files
SRCS = emMain.cpp readMol2.cpp Mol.cpp

# List of object files
OBJS = $(SRCS:.cpp=.o)
# Output JavaScript file
OUT = output.mjs
OUTWASM = output.wasm

# Compiler and flags
EMCC = emcc
CFLAGS = -O2

# Rule to create object files
%.o: %.cpp
	$(EMCC) $(CFLAGS) -c $< -o $@

# Rule to link object files into JavaScript
$(OUT): $(OBJS)
	$(EMCC) $(OBJS) -o $(OUT) --bind

# Clean rule
clean:
	rm -f $(OBJS) $(OUT) $(OUTWASM)

# Default rule
all: $(OUT)
