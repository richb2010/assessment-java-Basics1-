/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
//usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
[--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
[-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
[--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
[--super-prefix=<path>] [--config-env=<name>=<envvar>]
<command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
clone             Clone a repository into a new directory
init              Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
add               Add file contents to the index
mv                Move or rename a file, a directory, or a symlink
restore           Restore working tree files
rm                Remove files from the working tree and from the index
sparse-checkout   Initialize and modify the sparse-checkout

examine the history and state (see also: git help revisions)
bisect            Use binary search to find the commit that introduced a bug
diff              Show changes between commits, commit and working tree, etc
grep              Print lines matching a pattern
log               Show commit logs
show              Show various types of objects
status            Show the working tree status

grow, mark and tweak your common history
branch            List, create, or delete branches
commit            Record changes to the repository
merge             Join two or more development histories together
rebase            Reapply commits on top of another base tip
reset             Reset current HEAD to the specified state
switch            Switch branches
tag               Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
fetch             Download objects and refs from another repository
pull              Fetch from and integrate with another repository or a local branch
push              Update remote refs along with associated objects

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
git --help 

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
git init

git config --global init.deaultBranch 

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
git clone 
-v, --verbose         be more verbose
    -q, --quiet           be more quiet
    --progress            force progress reporting
    --reject-shallow      don't clone shallow repository
    -n, --no-checkout     don't create a checkout
    --bare                create a bare repository
    --mirror              create a mirror repository (implies bare)
    -l, --local           to clone from a local repository
    --no-hardlinks        don't use local hardlinks, always copy
    -s, --shared          setup as shared repository
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
git Status
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
git add. 
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
git commit 

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
git remote add <name> <url>

and then push using the remote name

    git push <name>