I-BERT: Integer-only BERT Quantization
======================================
Kim et al, 2021

Read by me: June 5th, 2023

`Here <https://arxiv.org/pdf/2101.01321>`_ is the original paper.

Summary
-------
* Most "integer only" quantization of NN typically still do non-linear operations in FP
* By doing clever polynomial approximations of GELU, Softmax, and squart root, they were able to implement BERT
* Due to the simplicity of integer only operations, I-BERT preformed better than BERT
* Not only did they see a reduction in latency, they also saw an increase in accuracy 

Thoughts
--------
* The approximations for non-linear functions were worse than the floating part counterpart, however ablation studies showed that the model actually preformed better with the integer only version. The paper does not explore this.
* The fact that integer approximations did not significantly reduce preformance implies that the percision of float point arithmetic is not strictly necessary in a transformer model
* This paper suggests that any hardware-conscience implementation of BERT (or an LLM in general) should not attempt to do a full FP implementation
