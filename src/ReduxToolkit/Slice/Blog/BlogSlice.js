import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_BLOG_API, CREATE_BLOG_API } from "../../../Api_url";
// create blog
export const createBlog = createAsyncThunk('createBlog/blog', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(CREATE_BLOG_API, data)
        return response.data.message;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})
// get blog
export const getBlog = createAsyncThunk('getblog/blog', async () => {
    try {
        const response = await axios.get(GET_BLOG_API);
        return response.data; // Assuming your API response contains a 'blogs' property
    } catch (error) {
        throw new Error(error.message);
    }
});
// delete blog
export const deleteBlogs = createAsyncThunk('deleteBlogs/blog', async (deleteBlogId, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`https://wave-mantra.vercel.app/api/blog/${deleteBlogId}`);
        return response.data.message; // Assuming your API response contains a 'blogs' property
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});



const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogs: [],
        status: 'idle',
        error: null,
        message: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            //create blog
            .addCase(createBlog.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createBlog.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.message = action.payload;
                if (state.status === 'succeeded') {
                    alert(state.message)
                }
                state.status = 'idle';

            })
            .addCase(createBlog.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                if (state.status === 'failed') {
                    alert(state.error)
                }
            })
            //getblogs
            .addCase(getBlog.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getBlog.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.blogs = action.payload;

                
            })
            .addCase(getBlog.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            //delete blogs
            .addCase(deleteBlogs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteBlogs.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.blogs = state.blogs.filter(blog => blog.deleteBlogs !== action.payload);
                // state.status = 'idle'
                // state.blogs = action.payload;
            })
            .addCase(deleteBlogs.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export default blogSlice.reducer;
