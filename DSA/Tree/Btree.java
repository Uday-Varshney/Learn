import java.util.LinkedList;
import java.util.Queue;
import java.util.spi.CurrencyNameProvider;

public class Btree{
    // make it static so that we can't make the object of it.
    static class Node{
        int data;
        Node left;
        Node right;
        Node(int data){
            this.data=data;
            this.left=null;
            this.right=null;
        }
    }
    
    static class binarytree{
        static int indx=-1;
        public static Node buildtree(int nodes[]){
            indx++;
            if(nodes[indx]==-1){
                return null;
            }
            Node newNode=new Node(nodes[indx]);
            newNode.left=buildtree(nodes); 
            newNode.right=buildtree(nodes);
            return newNode;          
        }   
    }

    ///complixity is 0(n)
    public static void preorder(Node root){
        if(root==null){
            return;
        }
        System.out.print(root.data+" ");
        preorder(root.left); 
        // return the curse here
        preorder(root.right);
    }

    public static void inorder(Node root){
        if(root==null){
            return;
        }
        inorder(root.left);
        System.out.print(root.data+" ");
        inorder(root.right);
    }

    public static void postorder(Node root){
        if(root==null){
            return;
        }
        postorder(root.left);
        postorder(root.right);
        System.out.print(root.data+" ");
    }

    // time complexity is 0(n)
    public static void levelorder(Node root){
        Queue<Node> q=new LinkedList<>();
        q.add(root);
        q.add(null);
        // jab tak queue khali na ho paye
        while(!q.isEmpty()){
            Node currNode=q.remove();
            if(currNode==null){
                System.out.println();
                if(q.isEmpty()){
                    break;//matlab sab khali ho gya h.
                }
                else{
                    q.add(null);//next level pe jane k liye null add kiya agr null atta h to pta chalta h ki dusre level p aa gye..
                }
            }
            else{
                System.out.print(currNode.data+" ");
                if(currNode.left!=null){
                    q.add(currNode.left);
                }
                if(currNode.right!=null){
                    q.add(currNode.right);
                }
            }
        }
    }
    public static void main(String[] args) {
	    int nodes[]={1,2,4,-1,-1,5,-1,-1,3,-1,6,-1,-1};
		binarytree tree=new binarytree();
		Node root=tree.buildtree(nodes);
        levelorder(root);
	}
}